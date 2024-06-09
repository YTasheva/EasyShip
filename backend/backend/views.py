from django.http import JsonResponse
from rest_framework.decorators import api_view
from .azure import analyze_document
from django.core.files.storage import FileSystemStorage
import traceback

def analyze_result_to_dict(analyze_result):
    # Converts the AnalyzeResult object to a dictionary with only relevant fields
    def field_to_dict(field):
        if isinstance(field, list):
            return [field_to_dict(f) for f in field]
        elif isinstance(field, dict):
            return {k: field_to_dict(v) for k, v in field.items()}
        elif hasattr(field, "__dict__"):
            # Extract only the 'content' and 'value' fields if they exist
            field_dict = {k: field_to_dict(v) for k, v in field.__dict__.items() if k in ['content', 'value']}
            return field_dict
        else:
            return field

    return field_to_dict(analyze_result)

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
            result_dict = analyze_result_to_dict(result)
            print(f"Analysis result: {result_dict}")
            return JsonResponse(result_dict, safe=False)  # Set safe to False
        except Exception as e:
            print(f"Error analyzing document: {traceback.format_exc()}")
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=400)