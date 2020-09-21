from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListList.as_view()),
    path('<int:pk>/', views.DetailList.as_view()),
]