from django.shortcuts import render, redirect
from django.contrib.auth import login,  logout
from .form import RegisterForm ,LoginForm
from rest_framework import viewsets
from .models import Register
from .serializers import RegisterSerializer
from rest_framework.permissions import IsAuthenticated

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('user')  # 👈 Redirect after successful login
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')


class RegisterView(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [IsAuthenticated]
