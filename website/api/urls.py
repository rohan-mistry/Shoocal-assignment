from django.urls import path, include
from rest_framework import routers
from .views import CommentsView,LikeView,DislikeView
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = format_suffix_patterns([
    path('comments/', CommentsView, name='comment-view'),
    path('comments/like/<int:pk>/', LikeView, name='like-view'),
    path('comments/dislike/<int:pk>/', DislikeView, name='dislike-view'),
])