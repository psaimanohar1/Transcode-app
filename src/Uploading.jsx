import React, { useState } from 'react';

function Uploading() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resolution, setResolution] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("filename", selectedFile.name);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        alert(`Upload successful: ${data.message}`);
        const [width , height] = data.resolution.split("x").map(Number);

        const standard_label = (width,height) => {
          if (height >= 1080) return "1080p";
          if (height >=720) return "720P";
          if (height >= 480) return "480p";
          if (height >= 360) return "360p";
        }
        const standard_label_resolution = standard_label(width,height);
        
        
        setResolution(standard_label_resolution); // set resolution after successful upload
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
  };

  const transcode_options = () => {
    console.log("transcoding options");
    
  }

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
          Selected file: <strong>{selectedFile.name}</strong>
        </p>
      )}

      {resolution && (
        <p className="mt-2 text-sm text-gray-700">
          Resolution: <strong>{resolution}</strong>
          </p>
        
      )}

      <button onClick={transcode_options} className='flex-col'>transcode options</button>
 

    </div>
  );
}

export default Uploading;
