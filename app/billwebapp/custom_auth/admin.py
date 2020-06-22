from django.contrib import admin
from custom_auth.models import *
from financas.models import *
# Register your models here.
admin.site.register(Profile)

admin.site.register(DespesaAdicional)
admin.site.register(DespesaFixa)
admin.site.register(DespesaVariavel)
admin.site.register(Renda)
admin.site.register(Reserva)