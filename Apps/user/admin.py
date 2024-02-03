from django.contrib import admin

from . import models


@admin.register(models.UserAccount)
class PostAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'is_editor', 'is_staff')
    search_fields = ('first_name', 'last_name', 'email', 'is_editor', 'is_staff',)