from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.core.mail import send_mail

@api_view(['GET'])
def user_details(request):
    try:
        # Fetch user details where name is "Narayan jat"
        user = User.objects.get(name="Narayan Jat")
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def add_details(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if name and email and message:
        try:
            send_mail(
                'New Contact Form Submission',
                f"Name: {name}\nEmail: {email}\nMessage: {message}",
                f'{email}',
                ['nj223948@gmail.com'],
                fail_silently=False,
            )
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response({'error': 'Please the fields correctly'}, status=status.HTTP_400_BAD_REQUEST)
