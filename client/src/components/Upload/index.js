import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
      <div className="App bg-[#5D6C83] mt-20 p-8">
        <div className="relative flex justify-center items-center space-x-96 px-10 mb-10">
          <div className="absolute top-0 left-10 mr-10">
            <h1 className="text-3xl font-semibold text-left text-gray-100 mb-5">Analyze Document</h1>
            <h1 className="text-sm font-semibold text-left text-gray-200">Upload a document to analyze</h1>
          </div>
          <div className="flex space-x-5">           
            <form onSubmit={handleSubmit}>
              <input type="file" placeholder="Enter Your Mail" className="input input-bordered w-80 max-w-md" onChange={handleFileChange} required />
              <button className="submit btn bg-yellow text-white rounded-lg border-none">Analyze</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {analysisResult && (
              <div>
                <h3>Analysis Result</h3>
                <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Upload;
