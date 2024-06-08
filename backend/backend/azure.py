import os
from azure.ai.formrecognizer import DocumentAnalysisClient
from azure.core.credentials import AzureKeyCredential
from django.conf import settings

def authenticate_client():
    credential = AzureKeyCredential(settings.AZURE_KEY)
    client = DocumentAnalysisClient(
        endpoint=settings.AZURE_ENDPOINT, 
        credential=credential)
    return client

def analyze_document(file_path):
    client = authenticate_client()
    model_id = settings.AZURE_MODEL
    
    with open(file_path, "rb") as f:
        poller = client.begin_analyze_document(model_id=model_id, document=f)
    
    result = poller.result()
    return result