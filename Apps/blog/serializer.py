from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
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