from django.shortcuts import render

from .models import Yacht, Client
from .serializers import YachtSerializer, ClientSerializer
from rest_framework import generics


class YachtList(generics.ListCreateAPIView):
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class YachtDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Yacht.objects.all()
    serializer_class = YachtSerializer


class ClientList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = YachtSerializer