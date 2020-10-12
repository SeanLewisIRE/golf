from django.db import models

# Create your models here.

class frontend_test(models.Model):
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    home_club = models.CharField(max_length=100)
