from rest_framework import serializers
from custom_auth.models import *
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileSerializer()
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'profile')

