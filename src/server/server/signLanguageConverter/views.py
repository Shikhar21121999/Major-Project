from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
import json
from datetime import datetime
from signLanguageConverter.WordClassifier import WordClassifier

class SignGroupView(APIView):

    def get(self, request):
        statement = request.GET.get('statement', "")
        wordClassify = WordClassifier(statement)
        imageNamesArr = wordClassify.fetchImageNames()
        return Response({'imageNames': imageNamesArr}, status=status.HTTP_200_OK)
    

