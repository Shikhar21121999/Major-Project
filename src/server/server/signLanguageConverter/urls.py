from django.test import TestCase

from django.urls import path
from .views import SignGroupView

urlpatterns = [
    path('signLanguage/', SignGroupView.as_view(), name='sign_language')
]
