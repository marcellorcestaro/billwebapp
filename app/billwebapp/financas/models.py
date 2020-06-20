from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Reserva(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=140)
    data = models.DateField(null=True)
    destino = models.CharField(max_length=140)
    categoria = models.CharField(max_length=140)
    valor = models.FloatField()
    aplicado = models.BooleanField(default=False)
    faltaReservar = models.FloatField(null=True)
    totalPrevisto = models.FloatField()

    class Meta:
        ordering = ["-data"]

    def __str__(self):
        return self.descricao

class DespesaAdicional(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=140)
    data = models.DateField(null=True)
    destino = models.CharField(max_length=140)
    categoria = models.CharField(max_length=140)
    valor = models.FloatField()
    pago = models.BooleanField(default=False)
    totalPago = models.FloatField(null=True)
    faltaPagar = models.FloatField(null=True)
    totalPrevisto = models.FloatField()

    class Meta:
        ordering = ["-data"]

    def __str__(self):
        return self.descricao

class DespesaVariavel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=140)
    data = models.DateField(null=True)
    destino = models.CharField(max_length=140)
    categoria = models.CharField(max_length=140)
    valor = models.FloatField()
    pago = models.BooleanField(default=False)
    totalPago = models.FloatField(null=True)
    faltaPagar = models.FloatField(null=True)
    totalPrevisto = models.FloatField()

    class Meta:
        ordering = ["-data"]

    def __str__(self):
        return self.descricao

class DespesaFixa(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=140)
    data = models.DateField(null=True)
    destino = models.CharField(max_length=140)
    categoria = models.CharField(max_length=140)
    valor = models.FloatField()
    pago = models.BooleanField(default=False)
    totalPago = models.FloatField(null=True)
    faltaPagar = models.FloatField(null=True)
    totalPrevisto = models.FloatField()

    class Meta:
        ordering = ["-data"]

    def __str__(self):
        return self.descricao

class Renda(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=140)
    data = models.DateField(null=True)
    origem = models.CharField(max_length=140)
    categoria = models.CharField(max_length=140)
    valor = models.FloatField()
    recebido = models.BooleanField(default=False)
    faltaReceber = models.FloatField(null=True)
    totalPrevisto = models.FloatField()

    class Meta:
        ordering = ["-data"]

    def __str__(self):
        return self.descricao
        