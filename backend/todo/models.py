from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length = 500)
    due_date = models.DateField(auto_now=True)
    completed =  models.BooleanField(default=False)
    
    
    def __str__(self):
        return self.title
    
    
    