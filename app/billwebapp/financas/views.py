from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from financas.models import *
from financas.serializers import *

# Create your views here.
class DespesaVariavelList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        queryset = DespesaVariavel.objects.all() #.filter(request.user.id)
        serializer = DespesaVariavelSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        dataToSend = request.data

        dataToSend["user"] = 1 # request.user.id

        serializer = DespesaVariavelSerializer(data=dataToSend)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class DespesaVariavelDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaVariavel.objects.all().get(user=id)
        except DespesaVariavel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaVariavelSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, id, format=None):

        try:
            queryset = DespesaVariavel.objects.all().get(user=id)
        except DespesaVariavel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaVariavelSerializer(queryset, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DespesaFixaList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        queryset = DespesaFixa.objects.all()
        serializer = DespesaFixaSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        dataToSend = request.data

        dataToSend["user"] = 1

        serializer = DespesaFixaSerializer(data=dataToSend)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class DespesaFixaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaFixa.objects.all().get(user=id)
        except DespesaFixa.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaFixaSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, id, format=None):

        try:
            queryset = DespesaFixa.objects.all().get(user=id)
        except DespesaFixa.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaFixaSerializer(queryset, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DespesaAdicionalList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        queryset = DespesaAdicional.objects.all()
        serializer = DespesaAdicionalSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        dataToSend = request.data

        dataToSend["user"] = 1

        serializer = DespesaAdicionalSerializer(data=dataToSend)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class DespesaAdicionalDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaAdicional.objects.all().get(user=id)
        except DespesaAdicional.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaAdicionalSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, id, format=None):

        try:
            queryset = DespesaAdicional.objects.all().get(user=id)
        except DespesaAdicional.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaAdicionalSerializer(queryset, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RendaList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        queryset = Renda.objects.all()
        serializer = RendaSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        dataToSend = request.data

        dataToSend["user"] = 1

        serializer = RendaSerializer(data=dataToSend)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class RendaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = Renda.objects.all().get(user=id)
        except Renda.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RendaSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, id, format=None):

        try:
            queryset = Renda.objects.all().get(user=id)
        except Renda.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RendaSerializer(queryset, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReservaList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        queryset = Reserva.objects.all()
        serializer = ReservaSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        dataToSend = request.data

        dataToSend["user"] = 1

        serializer = ReservaSerializer(data=dataToSend)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)

class ReservaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = Reserva.objects.all().get(user=id)
        except Reserva.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReservaSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, id, format=None):

        try:
            queryset = Reserva.objects.all().get(user=id)
        except Reserva.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReservaSerializer(queryset, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)