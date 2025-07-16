import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Uploading from './Uploading';
import React, { useState } from 'react';

function Home() {
  const [showUpload, setShowUpload] = useState(false);
  
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <nav className="w-1/4 bg-gray-800 text-white p-4 flex flex-col">
          {/* Upload Button */}
          <Link to="/AssetTranscoding/Uploading">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mb-4 mt-10"
          onClick={() => setShowUpload(true)}>
            Select file
          </button>
          </Link>

          {/* Sidebar Links */}
          <ul className="space-y-4 mt-15">
            <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
              <Link to="/AssetTranscoding/Information">Information</Link>
            </li>
            <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
              <Link to="/AssetTranscoding/Transcode">Transcoded</Link>
            </li>
            <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
              <Link to="/AssetTranscoding/Video">Video</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold">Welcome to Asset Transcoding</h2>
          <p className="mt-4">This is where your main content will go.</p>

          {/* Nested Routes */}
          <div className="mt-8">
          
          {showUpload && <Uploading />}
            <Outlet /> {/* Render nested routes here */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
