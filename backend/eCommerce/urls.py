from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('csrf-token/', views.csrf_token),
    path('api/v1/users/', include('users.urls')),
    path('api/v1/inventory/', include('inventory.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth', include('rest_auth.urls')),
]
