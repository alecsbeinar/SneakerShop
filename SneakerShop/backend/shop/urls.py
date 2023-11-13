from django.urls import path
from django.views.generic import TemplateView

app_name = "shop"
urlpatterns = [
    path('', TemplateView.as_view(template_name="shop/index.html")),
]