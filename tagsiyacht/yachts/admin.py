from django.contrib import admin

from .models import Yacht, Client, Sale

# Register your models here.
admin.site.register(Yacht)
admin.site.register(Client)
admin.site.register(Sale)