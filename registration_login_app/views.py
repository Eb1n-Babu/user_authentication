from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer


class AuthViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    # REGISTER
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

    # LOGIN
    @action(detail=False, methods=["post"])
    def login(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    # LOGOUT
    @action(detail=False, methods=["post"])
    def logout(self, request):
        logout(request)
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
