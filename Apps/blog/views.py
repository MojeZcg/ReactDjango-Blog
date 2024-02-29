from django.db.models.query_utils import Q
from rest_framework import permissions, status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from slugify import slugify

from apps.category.models import Category

from .models import Post, ViewCount
from .pagination import LargeSetPagination, MediumSetPagination, SmallSetPagination
from .permissions import AuthorPermissions, IsPostAuthorOrReadOnly
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
                
            if ViewCount.objects.filter(post=post, ip_address=ip):
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
        
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = PostListSerializer(results, many=True)
        
        return paginator.get_paginated_response({'filtered_posts': serializer.data})
 
class AuthorPostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            
            post = Post.objects.get(slug=slug)
            serializer = PostSerializer(post)
            
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            
            if address:
                ip = address.split(',')[1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
                
            if ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1 
                post.save()
                
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND) 
  
class AuthorBlogListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        
        user = self.request.user
        
        if Post.objects.filter(author=user).exists():
            posts = Post.objects.filter(author=user, status__in=['draft', 'published'])

            paginator = SmallSetPagination()

            result = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(result, many = True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND)
    
class EditBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)
    parser_classes = [MultiPartParser, FormParser]
    
    def put(self, request, format = None):
        user = self.request.user
        
        data = self.request.data
        
        post = Post.objects.get(slug=data['slug'])
        
        if(data['title'] and (data['title'] != 'undefined' or data['title'] != "")):
            post.title = data['title']
            if(len(data['title']) < 40):
                post.slug = slugify(data['title'])
                post.save()
            else:
                new_slug = slugify(data['title'])
                post.slug = new_slug[:40]
                post.save()
            
        if(data['thumbnail'] and (data['thumbnail'] != 'undefined' or data['thumbnail'] != "")):
            post.thumbnail = data['thumbnail']
            post.save()
            
        if(data['description'] and data['description'] != 'undefined'):
            post.description = data['description']
            post.save()
            
        if(data['categoryid'] and data['categoryid'] != 'undefined'):
            category = Category.objects.get(id=data['categoryid'])
            post.category = category
            post.save()
            
        if(data['content'] and data['content'] != 'undefined'):
            post.content = data['content']
            post.save()
        
        if(data['time_read'] and (data['time_read'] != 'undefined' or data['time_read'] != 0)):
            post.time_read = data['time_read']
            post.save()
            
        return Response({'message': 'Post updated successfully'}, status=status.HTTP_200_OK)
     
class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)
    
    def put(self, request, format = None):
        user = self.request.user
        
        data = self.request.data
        
        post = Post.objects.get(slug=data['slug'])
        
        if post.author == user:
            post.status = 'draft'
            post.save()
            return Response({'message': 'Post '}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'You are not authorized to edit this post'}, status=status.HTTP_403_FORBIDDEN )
        
class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)
    
    def put(self, request, format = None):
        user = self.request.user
        
        data = self.request.data
        
        post = Post.objects.get(slug=data['slug'])
        
        if post.author == user:
            post.status = 'published'
            post.save()
            return Response({'message': 'Post '}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'You are not authorized to edit this post'}, status=status.HTTP_403_FORBIDDEN )
    
class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)
    def delete(self, request, slug, format=None):
        user = self.request.user
        
        post = Post.objects.get(slug=slug)
        
        if post.author == user or user.is_staff or user.is_superuser:
            post.delete()
            return Response({'success': 'Post deleted successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'You are not authorized to delete this post'}, status=status.HTTP_403_FORBIDDEN )
        
        
class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermissions,)
    def post(self, request,  format=None):
        user = self.request.user
        post = Post.objects.create(author=user, status='draft')
        uuid = post.slug
        
        return Response({'uuid': uuid}, status=status.HTTP_201_CREATED)