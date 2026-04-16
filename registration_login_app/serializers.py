# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
import re

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate_email(self, value):
        # Basic regex check
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise serializers.ValidationError("Invalid email format")
        # Ensure uniqueness
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use")
        return value

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long")
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("Password must contain at least one digit")
        if not any(char.isalpha() for char in value):
            raise serializers.ValidationError("Password must contain at least one letter")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email"),
            password=validated_data["password"]
        )
        return user
