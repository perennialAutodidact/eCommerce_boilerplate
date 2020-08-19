from .serializers import ProductSerializer, CategorySerializer
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from.models import Product, Category


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)

    return Response(data=serializer.data)


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)

    return Response(data=serializer.data)
