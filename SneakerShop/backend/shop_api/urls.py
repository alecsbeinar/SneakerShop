from rest_framework.routers import DefaultRouter
from shop_api.views import ProductModelViewSet

app_name = 'shop_api'
router = DefaultRouter()
router.register('', ProductModelViewSet, basename='product')
urlpatterns = router.urls
