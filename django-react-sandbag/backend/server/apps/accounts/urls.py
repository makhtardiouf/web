
#from server.apps.accounts.views import UserList
from django.conf.urls import url, include
from . import views

accounts_urls = [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/', include('djoser.urls.authtoken')),
    
    url(r'^api/v1/users/', views.UserList.as_view()),
    url('account/profile', views.profile),
]
