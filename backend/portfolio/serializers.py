from rest_framework import serializers
from .models import User



class UserSerializer(serializers.ModelSerializer):

	# create a meta class
	class Meta:
		model = User
    
		fields = (
		"id",
        "name",
        "email",
        "linkedin",
        "github",
        "bio",
        "experience",
        "goal",
        "about",
        "strong_sides_and_skills",
        "programming_knowledge",
        "tools_knowledge",
        "communication_skills",
        "projects",
        "education"
    )
