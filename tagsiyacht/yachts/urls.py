from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf.urls import url

from tagsiyacht import settings
from yachts import views

urlpatterns = [
    url(r'^rest/yachts/$', ensure_csrf_cookie(views.YachtList.as_view())),
    url(r'^rest/yachts/(?P<pk>[0-9]+)/$', views.YachtDetail.as_view()),
    url(r'^rest/clients/$', views.ClientList.as_view()),
    url(r'^rest/clients/(?P<pk>[0-9]+)/$', views.ClientDetail.as_view()),
    url(r'^rest/yachts/(?P<path>.*)$', 'django.views.static.serve',
		{'document_root': settings.MEDIA_ROOT}),
]