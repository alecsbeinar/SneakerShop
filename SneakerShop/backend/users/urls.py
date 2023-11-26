from django.urls import path
from .views import CustomUserCreate

app_name = 'users'

# TODO: logout
# TODO: after registration send client_id and client_secret
urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="create_user"),
]
