from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
import json
from datetime import datetime

# Create your views here.

# src\rest\stock_predictor\model_data\google\google_train.csv
class SignGroupView(APIView):

    def get(self, request):
        print("Here asdfasdf")
        return Response({'status': 'working'}, status=status.HTTP_200_OK)
    

