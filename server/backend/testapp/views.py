from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import testAppSerializer      
from .models import frontend_test


class testAppView(viewsets.ModelViewSet):       
  serializer_class = testAppSerializer
  queryset = frontend_test.objects.all()
