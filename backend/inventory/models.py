from django.db import models

# use the inflect library to pluralize
WEIGHT_UNITS = [
    ('g', 'gram'),
    ('oz', 'ounce'),
    ('lb', 'pound'),
    ('na', 'not applicable'),
]

VOLUME_UNITS = [
    ('fl oz', 'fluid ounce'),
    ('pt', 'pint'),
    ('qt', 'quart'),
    ('gal', 'gallon'),
    ('na', 'not applicable'),
]


class Category(models.Model):
    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(
        max_length=100,
        required=True,
    )
    description = models.TextField(
        max_length=10000,
        required=True
    )
    price_per = models.IntegerField(required=True)
    cost_per = models.IntegerField(required=True)
    in_stock = models.IntegerField(default=0)
    weight_amount = models.DecimalField(default=0.0)
    weight_unit = models.CharField(
        max_length=2,
        choices=SIZE_UNITS,
    )
    volume_amount = models.DecimalField(default=0.0)
    volume_unit = models.CharField(
        max_length=5,
        choices=SIZE_UNITS,
    )
    category = models.ManyToManyField(Category, related_name='category')

    def get_volume(self):
        return f'{self.volume_amount}{self.volume_unit}'

    def get_weight(self):
        return f'{self.weight_amount}{self.weight_unit}'

    def __str__(self):
        return self.title
