import React from "react";
import { useOutletContext } from "react-router-dom";

function Uploading() {
  const { selectedFile, setSelectedFile, resolution, setResolution } = useOutletContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file); // log selected file
    setSelectedFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file first.");

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
        console.log("Upload response:", data); // log backend response
        const [width, height] = data.resolution.split("x").map(Number);

        const standard_label = (h) => {
          if (h >= 1080) return "1080p";
          if (h >= 720) return "720p";
          if (h >= 480) return "480p";
          if (h >= 360) return "360p";
        };

        const label = standard_label(height);
        console.log("Standard label resolution:", label); // log computed label
        setResolution(label);
        alert(`Upload successful: ${data.message}`);
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Error uploading file.");
    }
  };

  const resolution_list = [1080, 720, 480, 360];

  const transcode_options = (res) => {
    const num = parseInt(res);
    const index = resolution_list.indexOf(num);
    console.log("Available transcode options:", resolution_list.slice(index + 1)); // log options
    return index === -1 ? [] : resolution_list.slice(index + 1);
  };

  const handleTranscode = async (selectedResolution) => {
    if (!selectedFile) return alert("Please upload a file first!");

    try {
      const res = await fetch("http://localhost:5000/transcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resolution: selectedResolution }),
      });

      const data = await res.json();
      console.log("Transcode response:", data); // log response
      alert(`Transcode request sent: ${data.message}`);
    } catch (err) {
      console.error("Error sending transcode request:", err);
      alert("Error sending transcode request");
    }
  };

  return (
    <div className="flex justify-start">
      <div className="bg-white p-6 rounded shadow-md max-w-md mt-10">
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

        {selectedFile && (
          <video
            className="w-96 h-56 rounded-lg shadow-lg"
            controls
            src={URL.createObjectURL(selectedFile)}
          >
            Your browser does not support the video tag.
          </video>
        )}

        {resolution && (
          <p className="mt-2 text-sm text-gray-700">
            Resolution: <strong>{resolution}</strong>
          </p>
        )}

        {resolution && (
          <>
            <p className="flex-col py-3 mt-3">Available Transcode Options:</p>
            <div className="flex my-2 gap-2">
              {transcode_options(resolution).map((r) => (
                <button
                  key={r}
                  onClick={() => handleTranscode(r)}
                  className="flex mt-2 gap-1 px-2 py-3 bg-gray-500 rounded-md"
                >
                  {r}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Uploading;
