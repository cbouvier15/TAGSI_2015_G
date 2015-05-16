from django.db import models

class Client(models.Model):
    """
    Model for Clients who buy yachts
    """
    user = models.ForeignKey('auth.User', related_name="client")


class Yacht(models.Model):
    """
    Model with a yacht's information
    """
    model = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=400)
    sold = models.BooleanField(default=False)
    photo = models.ImageField(upload_to='images/yachts',verbose_name=('Yacht Photo'), null=True, blank=True)

    def __str__(self):
        return self.model


class Sale(models.Model):
    """
    Model with information about a yacht's sale
    """
    yacht = models.ForeignKey('Yacht', related_name="sale_info")
    sale_price = models.IntegerField(default=0)
    client = models.ForeignKey('Client', related_name="transactions")
