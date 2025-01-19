from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    
    # Contact details
    email = models.EmailField(unique=True)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    medium = models.URLField(blank=True, null=True)
    
    # Bio
    bio = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    
    # Experience
    experience = models.TextField(blank=True, null=True)
    goal = models.TextField(blank=True, null=True)
    
    # Strong sides and skills
    strong_sides_and_skills = models.TextField(blank=True, null=True)
    
    # Knowledge
    programming_knowledge = models.TextField(blank=True, null=True)
    tools_knowledge = models.TextField(blank=True, null=True)
    communication_skills = models.TextField(blank=True, null=True)
    
    # Projects
    projects = models.TextField(blank=True, null=True)
    
    # Education
    education = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
