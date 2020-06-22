from django.urls import path
from custom_auth.views import UserDetail, UserList

urlpatterns = [
    path("user/<int:id>/", UserDetail.as_view()),
    path("user/", UserList.as_view()),
]
