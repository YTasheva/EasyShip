from rest_framework import serializers

class PDFUploadSerializer(serializers.Serializer):
    file = serializers.FileField()