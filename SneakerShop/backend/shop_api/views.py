from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import permission_classes, action
from rest_framework.generics import get_object_or_404
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from shop.models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import authentication_classes, permission_classes



class UserPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if view.action == 'list':
            return True
        elif view.action == 'create':
            return True
        else:
            return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        return request.user.is_authenticated


class ProductModelViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = (UserPermission,)

    def get_queryset(self):
        return Product.objects.all()

    def get_object(self, queryset=None, **kwargs):
        pk = self.kwargs.get('pk')
        obj = get_object_or_404(Product, slug=pk)
        self.check_object_permissions(self.request, obj)
        return obj


class AllowAll(permissions.BasePermission):
    def has_permission(self, request, view):
        return True


@authentication_classes([])
@permission_classes([])
class ProductSearch(generics.ListAPIView):
    permission_classes = [AllowAll]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['^name']
