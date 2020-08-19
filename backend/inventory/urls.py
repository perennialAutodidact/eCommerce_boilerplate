from django.contrib import admin
from django.urls import path

from . import views
urlpatterns = [
    path('', views.product_list),
    path('products/', views.product_list),
    path('categories/', views.category_list),
    # path('products/<int:pk>/', views.product_detail),
    # path('new/', views.product_create),
    # path('edit/<int:pk>', views.product_edit),
    # path('categories/<int:pk>', views.categories_list),
]
