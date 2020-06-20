from rest_framework import serializers
from financas.models import *

class DespesaVariavelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DespesaVariavel
        fields = '__all__' 

class DespesaFixaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DespesaFixa
        fields = '__all__'

class DespesaAdicionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = DespesaAdicional
        fields = '__all__'

class RendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Renda
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DespesaVariavel
        fields = '__all__'