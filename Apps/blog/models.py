import os
from uuid import uuid4

from ckeditor.fields import RichTextField
from django.conf import settings
from django.db import models
from django.utils import timezone

from apps.category.models import Category
from apps.user.models import UserAccount as User


def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.slug, filename)

class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    
    title =             models.CharField(max_length=255, blank=True, null=True)
    slug =              models.SlugField(max_length=255, default=uuid4, unique=True,)
    thumbnail =         models.ImageField(upload_to=blog_thumbnail_directory, blank=True, null=True) 
    
    author =            models.ForeignKey(User, on_delete=models.CASCADE)

    description =       models.TextField(max_length=255, blank=True, null=True)
    content =           RichTextField( blank=True, null=True)

    time_read =         models.IntegerField(default=0, blank=True, null=True)

    published =         models.DateField(default=timezone.now)
    views =             models.IntegerField(default=0, blank=True)
    
    status =            models.CharField(max_length=10, choices=options, default='draft')

    category =          models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)

    thumbnail_size=     models.PositiveIntegerField(null=True, blank=True)
    
    objects =           models.Manager()
    postobjects =       PostObjects() #Custom Manager
        
    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return f"{self.title}"

    def get_view_count(self):
        views = ViewCount.objects.filter(category=self).count()
        return views
    
    def save(self, *args, **kwargs):
        if self.thumbnail:
            self.thumbnail_size = self.thumbnail.size
        super().save(*args, **kwargs)
    

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)

    ip_address= models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
