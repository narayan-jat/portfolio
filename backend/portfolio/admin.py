from django.contrib import admin

# import the model Todo
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = (
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

admin.site.register(User,UserAdmin)
