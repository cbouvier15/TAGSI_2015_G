from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse

from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

import json

from .models import Yacht, Client
from .serializers import YachtSerializer, ClientSerializer


def login_view(request):
    user = json.loads(request.body.decode("utf-8"))
    username = user['username']
    password = user['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            return HttpResponse(json.dumps({
               'name': user.first_name,
               'lastname': user.last_name,
               'email': user.email,
               'id': user.id,
            }))
        else:
            # Return a 'disabled account' error message
            return HttpResponse('"Wrong credentials"', status=403)
    else:
        # Return an 'invalid login' error message.
        return HttpResponse('"Wrong credentials"', status=403)

def logout_view(request):
    logout(request)
    return HttpResponse('"Logout succeeded"')

class YachtList(generics.ListCreateAPIView):    
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class YachtDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class ClientList(generics.ListCreateAPIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)    
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)    
    queryset = Client.objects.all()
    serializer_class = YachtSerializer