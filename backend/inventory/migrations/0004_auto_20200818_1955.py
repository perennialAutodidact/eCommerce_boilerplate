# Generated by Django 3.1 on 2020-08-18 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0003_auto_20200818_1935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='categories',
            field=models.ManyToManyField(related_name='products', to='inventory.Category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='volume_unit',
            field=models.CharField(choices=[('fl oz', 'fluid ounce'), ('pt', 'pint'), ('qt', 'quart'), ('gal', 'gallon'), ('na', 'not applicable')], default='na', max_length=5),
        ),
        migrations.AlterField(
            model_name='product',
            name='weight_unit',
            field=models.CharField(choices=[('g', 'gram'), ('oz', 'ounce'), ('lb', 'pound'), ('na', 'not applicable')], default='na', max_length=2),
        ),
    ]
