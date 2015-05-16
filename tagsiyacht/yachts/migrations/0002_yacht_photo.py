# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('yachts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='yacht',
            name='photo',
            field=models.ImageField(verbose_name='Yacht Photo', upload_to='images/yachts', null=True, blank=True),
        ),
    ]
