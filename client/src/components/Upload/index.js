import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('document', selectedFile);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/analyze-document/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setAnalysisResult(response.data);
    } catch (err) {
      setError(
        err.response ? err.response.data : 'Error uploading file'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-32 w-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or
            drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          type="file"
          id="dropzone-file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {fileName && (
        <p className="mt-2 text-red-500 font-bold">{fileName}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-4">
        <button
          className="submit btn bg-yellow text-white rounded-lg border-none"
          type="submit"
        >
          Analyze
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {analysisResult && (
        <div>
          <h3>Analysis Result</h3>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Upload;
