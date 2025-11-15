from django.urls import path
from .views import *
from .views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),

    path('login/user/', RegisterView.as_view({'get': 'list', 'post': 'create'}),name='user'),
    path('login/user/<int:pk>/', RegisterView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]