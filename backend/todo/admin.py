from django.contrib import admin
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display =  ("title", "description","due_date","completed")
    
    

# Register Model

admin.site.register(Todo, TodoAdmin)
