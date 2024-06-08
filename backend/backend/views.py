from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .azure import analyze_document

def analyze_document_view(request):
    context = {}
    if request.method == 'POST' and request.FILES.get('document'):
        document = request.FILES['document']
        fs = FileSystemStorage()
        filename = fs.save(document.name, document)
        file_path = fs.path(filename)
        
        result = analyze_document(file_path)
        context['result'] = result
    
    return render(request, 'analyze_document.html', context)