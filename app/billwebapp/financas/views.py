from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from financas.models import *
from financas.serializers import *

# Create your views here.

class DespesaVariavelDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaVariavel.objects.filter(user=id)
        except DespesaVariavel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaVariavelSerializer(queryset, many=True)
        return Response(serializer.data)

class DespesaFixaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaFixa.objects.filter(user=id)
        except DespesaFixa.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaFixaSerializer(queryset, many=True)
        return Response(serializer.data)

class DespesaAdicionalDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = DespesaAdicional.objects.filter(user=id)
        except DespesaAdicional.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DespesaAdicionalSerializer(queryset, many=True)
        return Response(serializer.data)

class RendaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = Renda.objects.filter(user=id)
        except Renda.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RendaSerializer(queryset, many=True)
        return Response(serializer.data)

class ReservaDetail(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, id, format=None):

        try:
            queryset = Reserva.objects.filter(user=id)
        except Reserva.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReservaSerializer(queryset, many=True)
        return Response(serializer.data)