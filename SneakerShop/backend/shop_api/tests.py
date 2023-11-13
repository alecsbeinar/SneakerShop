from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from shop.models import Product, Category


class ProductTests(APITestCase):
    def test_view_products(self):
        url = reverse('shop_api:listcreate')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def create_product(self):
        self.test_category = Category.objects.create(name="Casual")

        # Default: category_id = 1
        data = {
            "name": "newr",
            "description": "new",
            "price": 1,
            "quantity": 1,
        }

        url = reverse("shop_api:listcreate")
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
