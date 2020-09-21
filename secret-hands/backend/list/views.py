from django.shortcuts import render
from rest_framework import generics

from .models import List
from .serializers import ListSerializer

class ListList(generics.ListCreateAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class DetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer