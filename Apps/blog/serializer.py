from rest_framework import serializers

from apps.category.serializer import CategorySerializer

from .models import *


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = [
            'id', 
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'published',
            'views',
            'category'
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
            'published',
            'views',
            'category'
        ]