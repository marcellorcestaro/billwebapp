from django.contrib import admin
from django.urls import path, include
from financas import views

urlpatterns = [
    path('despesa/variavel/<int:id>/', views.DespesaVariavelDetail.as_view()),
    path('despesa/fixa/<int:id>/', views.DespesaFixaDetail.as_view()),
    path('despesa/adicional/<int:id>/', views.DespesaAdicionalDetail.as_view()),
    path('renda/<int:id>/', views.RendaDetail.as_view()),
    path('reserva/<int:id>/', views.ReservaDetail.as_view()),
]

