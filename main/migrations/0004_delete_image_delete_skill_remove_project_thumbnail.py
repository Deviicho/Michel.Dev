# Generated by Django 5.1.4 on 2025-06-12 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_image'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.DeleteModel(
            name='Skill',
        ),
        migrations.RemoveField(
            model_name='project',
            name='thumbnail',
        ),
    ]
