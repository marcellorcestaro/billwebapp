from django.contrib import admin
from django.urls import path, include
from financas import views

urlpatterns = [
    path('despesa/variavel/', views.DespesaVariavelList.as_view()),
    path('despesa/variavel/<int:id>/', views.DespesaVariavelDetail.as_view()),

    path('despesa/fixa/', views.DespesaFixaList.as_view()),
    path('despesa/fixa/<int:id>/', views.DespesaFixaDetail.as_view()),

    path('despesa/adicional/', views.DespesaAdicionalList.as_view()),
    path('ddespesa/adicional/<int:id>/', views.DespesaAdicionalDetail.as_view()),

    path('renda/', views.RendaList.as_view()),
    path('renda/<int:id>/', views.RendaDetail.as_view()),

    path('reserva/', views.ReservaList.as_view()),
    path('reserva/<int:id>/', views.ReservaDetail.as_view()),
]

