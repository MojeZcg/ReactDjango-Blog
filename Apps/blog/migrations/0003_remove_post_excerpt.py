# Generated by Django 4.2.7 on 2024-01-01 00:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_rename_category_viewcount_post_remove_post_excerpt_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='excerpt',
        ),
    ]
