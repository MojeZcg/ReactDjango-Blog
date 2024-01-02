from django.urls import path

from .views import BlogListView, ListByCategoryView, PostDetailView

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListByCategoryView.as_view()),
    
    path('detail/<slug>', PostDetailView.as_view())
]
