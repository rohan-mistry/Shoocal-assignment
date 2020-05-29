from django.shortcuts import render
from .models import Comments
from rest_framework import viewsets, permissions
from .serializers import CommentsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests
# Create your views here.

@api_view(['GET','POST'])
def CommentsView(request):
    if request.method == 'GET':
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def LikeView(request,pk):
    if request.method == 'POST':
        try:
            comment = Comments.objects.get(pk=pk)
        except Comments.DoesNotExist:
            return Response({"status":"Not Found"}, status=status.HTTP_404_NOT_FOUND)    
        comment.upvotes = comment.upvotes+1
        comment.save()
        return Response({"status":"done"},status=status.HTTP_201_CREATED)


@api_view(['POST'])
def DislikeView(request,pk):
    if request.method == 'POST':
        try:
            comment = Comments.objects.get(pk=pk)
        except Comments.DoesNotExist:
            return Response({"status":"Not Found"}, status=status.HTTP_404_NOT_FOUND)    
        comment.downvotes = comment.downvotes + 1
        comment.save()
        return Response({"status":"done"},status=status.HTTP_201_CREATED)