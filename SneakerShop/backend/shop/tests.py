from django.test import TestCase
from django.contrib.auth.models import User
from shop.models import Product, Category


class Test_Create_Product(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name="Casual")
        test_product = Product.objects.create(name="New Balance 1906r", category_id=1, description="desc1",
                                              price=12.13, quantity=1)

    def test_product_content(self):
        product = Product.objects.get(id=1)
        cat = Category.objects.get(id=1)

        name = f'{product.name}'
        description = f'{product.description}'
        price = float(product.price)
        quantity = int(product.quantity)

        self.assertEqual(name, "New Balance 1906r")
        self.assertEqual(description, "desc1")
        self.assertEqual(price, 12.13)
        self.assertEqual(quantity, 1)
        self.assertEqual(str(product), "New Balance 1906r")
        self.assertEqual(str(cat), "Casual")
