from django.core.validators import MinLengthValidator
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProductManager(models.Manager):
    def new(self):
        return self.order_by("-updated_at")


class Product(models.Model):
    name = models.CharField(
        max_length=250,
        validators=[MinLengthValidator(2, "Title must be greater than 2 characters")]
    )
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    description = models.TextField(null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    quantity = models.IntegerField()
    slug = models.SlugField(max_length=250, unique=True, null=True, default=None)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ProductManager()

    def __str__(self):
        return self.name
