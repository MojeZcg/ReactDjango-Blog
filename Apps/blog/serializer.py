from rest_framework import serializers

from apps.category.serializer import CategorySerializer

from .models import *


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = [
            'id', 
            'author',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
            'thumbnail_size'
        ]

class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = [
            'id', 
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'status',
            'views',
            'category'
        ]