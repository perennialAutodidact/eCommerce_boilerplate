from django.core.management.base import BaseCommand
import pathlib
import json
from django.conf import settings
from inventory.models import Product, Category, WEIGHT_UNITS
from random import random, choice


class Command(BaseCommand):
    def handle(self, *args, **options):
        json_file = settings.BASE_DIR / 'inventory' / \
            'management'/'commands' / 'products.json'
        with open(json_file, 'r') as json_data:
            products = json.loads(json_data.read())

        for product in products:
            category = Category.objects.get_or_create(name=product['category'])

            new_product = Product.objects.create(
                title=product['title'],
                description=product['description'],
                price_per=product['price'],
                cost_per=product['price'] * .4,
                weight_amount=round(random() * 10, 2),
                weight_unit=choice(WEIGHT_UNITS),
                image=product['image'],
            )
            new_product.categories.add(category[0])
            new_product.save()
