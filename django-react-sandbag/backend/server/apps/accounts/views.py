from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import request, HttpResponseRedirect
from rest_framework import generics
from .serializers import UserSerializer
# Create your views here.

def profile(request):
    return HttpResponseRedirect("/api/v1/users/me/")


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
