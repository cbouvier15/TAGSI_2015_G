from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls import url

from tagsiyacht import settings
from yachts import views

urlpatterns = [
    url(r'^rest/login/$', views.login_view),
    url(r'^rest/logout/$', views.logout_view),
    url(r'^rest/signup/$', views.signup_view),

    url(r'^rest/yachts/$', ensure_csrf_cookie(views.YachtList.as_view())),
    url(r'^rest/yachts/(?P<pk>[0-9]+)/$', views.YachtDetail.as_view()),
    url(r'^rest/yachts/(?P<pk>[0-9]+)/buy/$', views.buy_yacht_view),
    url(r'^rest/clients/$', csrf_exempt(views.ClientList.as_view())),
    url(r'^rest/clients/(?P<pk>[0-9]+)/$', views.ClientDetail.as_view()),
    url(r'^rest/yachts/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': settings.MEDIA_ROOT}),
]