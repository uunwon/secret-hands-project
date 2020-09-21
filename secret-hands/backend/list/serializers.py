from rest_framework import serializers
from .models import List

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = List