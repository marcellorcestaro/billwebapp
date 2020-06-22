from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

from custom_auth.models import Profile
from custom_auth.serializers import UserSerializer

# Create your views here.

class UserList(APIView):

    def post(self, request, format=None):
        dataToSend = request.data

        serializer = UserSerializer(data=dataToSend, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class UserDetail(APIView):

    def get(self, request, id, format=None):

        try:
            queryset = User.objects.all().get(id=id)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(queryset, context={'request': request})
        return Response(serializer.data)