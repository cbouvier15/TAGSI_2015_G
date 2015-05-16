from rest_framework import serializers

from .models import Yacht, Client, Sale


class YachtSerializer(serializers.ModelSerializer):
    """
    Serializer for the Yacht model
    """

    class Meta:
        model = Yacht
        fields = ('id', 'model', 'price', 'description', 'sold', 'photo')


class ClientSerializer(serializers.ModelSerializer):
    """
    Serializer for the Yacht model
    """

    class Meta:
        model = Client
        fields = ('id', 'user')