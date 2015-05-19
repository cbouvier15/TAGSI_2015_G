from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User

from .models import Yacht, Client
from .serializers import YachtSerializer, ClientSerializer
from rest_framework import generics
from rest_framework import status


class YachtList(generics.ListCreateAPIView):
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class YachtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class ClientList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def create(self, request, *args, **kwargs):
        data = request.DATA
        user =  User()
        user.first_name = data['first_name']
        user.username = data['username']
        user.last_name = data['last_name']
        user.email = data['email']
        user.set_password(data['password'])
        try:
            user.save()
        except Exception as e:
            print(e)
        try:
            client = Client.objects.create(user=user)
        except Exception as e:
            print(e)

        return HttpResponse(status=status.HTTP_201_CREATED)

class ClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = YachtSerializer