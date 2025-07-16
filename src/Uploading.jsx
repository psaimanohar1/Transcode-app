import React, { useState } from 'react';

function Uploading() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // store selected file
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    // For now just log it. Later you can send it to backend.
    console.log('Selected file:', selectedFile);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Upload Your Asset</h2>

      <form onSubmit={handleUpload}>
        <input 
          type="file" 
          accept="video/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {selectedFile && (
        <p className="mt-4 text-sm text-gray-700">
          Selected: <strong>{selectedFile.name}</strong>
        </p>
      )}
    </div>
  );
}

export default Uploading;
