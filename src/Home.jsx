import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Uploading from './Uploading';

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resolution, setResolution] = useState(null);
  const [outputfile_url , setOutputFileUrl] = useState(null);
  const [mediainfo , setMediaInfo] = useState(null);
  const [loadingResolution , setLoadingResolution] = useState(null);

   const [open, setOpen] = useState(false);
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white p-4 flex flex-col h-screen">
        <Link to="/assetTranscoding/Uploading">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mb-4 mt-10"
          > 
            Select file
          </button>
        </Link>

        <ul className="space-y-4 mt-15">
          <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
            <Link to="/assetTranscoding/Transcode">Transcoded</Link>
          </li>
          <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
            <Link to="/assetTranscoding/Information">Information</Link>
          </li>
          
          {/* <li className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-md cursor-pointer">
            <Link to="/assetTranscoding/Video">Video</Link>
          </li> */}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold">Welcome to Asset Transcoding</h2>
        <div className="mt-8">
          <Outlet context={{ selectedFile, setSelectedFile, resolution, setResolution, outputfile_url, setOutputFileUrl, mediainfo, setMediaInfo , loadingResolution , setLoadingResolution }} />
        </div>
      </main>

      {mediainfo && 
      

       <aside className="w-1/4 bg-gray-200 p-4 h-screen">
        <h3 className="text-lg font-semibold mb-4">Right Sidebar</h3>
        <div className="space-y-4">
         <button onClick={() => setOpen(!open)} className="h-8 w-25 rounded-md bg-slate-400">MediaInfo{open ? "⇧" : "⇩"}</button>
            {open && (
              <pre className="mt-4 p-2 bg-gray-100 rounded max-h-[500px] overflow-auto">
              {JSON.stringify(mediainfo, null, 2)}
              </pre>

            ) }
          {/* <p className="text-sm text-gray-700">You can place mediainfo or logs here.</p> */}
        </div>
      </aside> }
    </div>
  );
}

export default Home;
