from django.db import models

# Create your models here.
class Comments(models.Model):
    name = models.CharField(max_length=200)
    comment = models.TextField()
    upvotes = models.IntegerField(null=True , blank=True,default=0)
    downvotes = models.IntegerField(null=True , blank=True,default=0)

    def __str__(self):
        return self.name