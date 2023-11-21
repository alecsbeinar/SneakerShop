from rest_framework.routers import DefaultRouter
from shop_api.views import ProductViewSet

app_name = 'shop_api'
router = DefaultRouter()
router.register('', ProductViewSet, basename='product')
urlpatterns = router.urls
