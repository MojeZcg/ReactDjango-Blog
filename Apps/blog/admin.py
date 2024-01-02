from django.contrib import admin

from .models import Post, ViewCount

admin.site.register(Post)
admin.site.register(ViewCount)