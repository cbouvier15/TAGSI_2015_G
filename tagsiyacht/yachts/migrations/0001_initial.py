# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='client')),
            ],
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('sale_price', models.IntegerField(default=0)),
                ('client', models.ForeignKey(to='yachts.Client', related_name='transactions')),
            ],
        ),
        migrations.CreateModel(
            name='Yacht',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('model', models.CharField(max_length=200)),
                ('price', models.IntegerField(default=0)),
                ('description', models.CharField(max_length=400)),
                ('sold', models.BooleanField(default=False)),
            ],
        ),
        migrations.AddField(
            model_name='sale',
            name='yacht',
            field=models.ForeignKey(to='yachts.Yacht', related_name='sale_info'),
        ),
    ]
