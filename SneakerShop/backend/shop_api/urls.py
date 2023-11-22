from django.urls import path, include
from rest_framework.routers import DefaultRouter
from shop_api.views import ProductModelViewSet, ProductSearch

app_name = 'shop_api'
router = DefaultRouter()
router.register('', ProductModelViewSet, basename='product')

urlpatterns = [
    path('search/', ProductSearch.as_view(), name='productsearch'),
    path('', include(router.urls)),
]
