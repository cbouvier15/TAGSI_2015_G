from django.conf.urls import url
from yachts import views

urlpatterns = [
    url(r'^yachts/$', views.YachtList.as_view()),
    url(r'^yachts/(?P<pk>[0-9]+)/$', views.YachtDetail.as_view()),
    url(r'^clients/$', views.ClientList.as_view()),
    url(r'^clients/(?P<pk>[0-9]+)/$', views.ClientDetail.as_view()),
]