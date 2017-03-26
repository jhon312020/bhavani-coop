from django.db import models

class Interest(models.Model):
    IdInterest = models.AutoField(primary_key=True)
    InterestName = models.CharField(max_length=30)

class Lokafyer(models.Model):
    IdLokafyer = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    Email = models.CharField(max_length=50)
    Phone = models.CharField(max_length=15)
    About = models.TextField()

class REL_Lokafyer_Interest(models.Model):
    IdLokafyer = models.ForeignKey(Lokafyer, on_delete=models.CASCADE)
    IdInterest = models.ForeignKey(Interest, on_delete=models.CASCADE)