from django.urls import path
from shop_api.views import ProductList, ProductDetail

app_name = 'shop_api'
urlpatterns = [
    path('', ProductList.as_view(), name='listcreate'),
    path('<int:pk>/', ProductDetail.as_view(), name='detailcreate'),
]