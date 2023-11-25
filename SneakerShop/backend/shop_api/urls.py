from django.urls import path, include
from rest_framework.routers import DefaultRouter
from shop_api.views import ProductModelViewSet, ProductSearch, CreateProduct, AdminProductDetail, EditProduct, \
    DeleteProduct

app_name = 'shop_api'
router = DefaultRouter()
router.register('', ProductModelViewSet, basename='product')

urlpatterns = [
    path('search/', ProductSearch.as_view(), name='productsearch'),
    path('', include(router.urls)),

    path('admin/create/', CreateProduct.as_view(), name='createproduct'),
    path('admin/edit/productdetail/<int:pk>/', AdminProductDetail.as_view(), name='admindetailproduct'),
    path('admin/edit/<int:pk>/', EditProduct.as_view(), name='editproduct'),
    path('admin/delete/<int:pk>/', DeleteProduct.as_view(), name='deleteproduct'),

]
