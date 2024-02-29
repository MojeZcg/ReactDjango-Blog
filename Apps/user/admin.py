from django.contrib import admin

from . import models


@admin.register(models.UserAccount)
class PostAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_editor', 'is_staff')
    search_fields = ('email','first_name', 'last_name', 'is_editor', 'is_staff',)