
from rest_framework import serializers
from .models import frontend_test


class testAppSerializer(serializers.ModelSerializer):
  class Meta:
    model = frontend_test
    fields = ('first_name', 'second_name', 'home_club')
