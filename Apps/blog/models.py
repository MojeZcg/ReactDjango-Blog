from ckeditor.fields import RichTextField
from django.db import models
from django.utils import timezone

from apps.category.models import Category

# Create your models here.

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):

    title =         models.CharField(max_length=255)
    slug =          models.SlugField(max_length=255)
    thumbnail =     models.ImageField(upload_to= blog_thumbnail_directory, max_length=500)

    description =   models.TextField(max_length=255)
    content =       RichTextField()

    time_read =     models.IntegerField(default=0)

    published =     models.DateField(default=timezone.now)
    views =         models.IntegerField(default=0, blank=True)

    category =      models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return f"{self.title}"

    def get_view_count(self):
        views = ViewCount.object.filter(category=self).count
        return views

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)

    ip_address= models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"