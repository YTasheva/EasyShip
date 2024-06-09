from django.http import JsonResponse
from rest_framework.decorators import api_view
from .azure import analyze_document
from django.core.files.storage import FileSystemStorage
import traceback


@api_view(['POST'])
def analyze_document_view(request):
    if request.method == 'POST' and request.FILES.get('document'):
        document = request.FILES['document']
        fs = FileSystemStorage()
        filename = fs.save(document.name, document)
        file_path = fs.path(filename)
        
        try:
            print(f"Analyzing document: {file_path}")
            result = analyze_document(file_path)
            for document in result.documents: 
                for field in document.fields.items():
                    field_name, field_value = field
                    print(field_name, " value: ", field_value.value)
        except Exception as e:
            print(f"Error analyzing document: {traceback.format_exc()}")
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=400)