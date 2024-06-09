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
    <div className="App">
      <h2>Analyze Document</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Analyze</button>
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
