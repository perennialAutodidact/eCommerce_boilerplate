from django.contrib import admin
from django.urls import path

from .views import UserList, UserProfile

urlpatterns = [
    path('<int:pk>/', UserProfile.as_view()),
    path('', UserList.as_view())
]
