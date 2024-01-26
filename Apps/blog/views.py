from django.db.models.query_utils import Q
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.category.models import Category

from .models import Post, ViewCount
from .pagination import LargeSetPagination, MediumSetPagination, SmallSetPagination
from .serializer import PostListSerializer, PostSerializer


class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.postobjects.all().exists():
            posts = Post.postobjects.all()

            paginator = SmallSetPagination()

            result = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(result, many = True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND)

class ListByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            slug = request.query_params.get('slug')
            
            category = Category.objects.get(slug=slug)
            
            posts = Post.postobjects.order_by('-published').all()

            
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
                
            else:
                sub_category = Category.objects.filter(parent=category)

                result_categories = [category]

                for cat in sub_category:
                    result_categories.append(cat)

                result_categories = tuple(result_categories)

                posts = posts.filter(category__in=result_categories)
            
            paginator = SmallSetPagination()

            result = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(result, many = True)

            return paginator.get_paginated_response({'posts_by_category': serializer.data})
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND)
        
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Post.postobjects.filter(slug=slug).exists():
            
            post = Post.postobjects.get(slug=slug)
            serializer = PostSerializer(post)
            
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
                
            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1 
                post.save()
                
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND)
    
class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.postobjects.filter(
            Q(title__icontains=search_term) | 
            Q(description__icontains=search_term) | 
            Q(category__name__icontains=search_term)
        )
        
        paginator = LargeSetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = PostListSerializer(results, many=True)
        
        return paginator.get_paginated_response({'filtered_posts': serializer.data})
    
        