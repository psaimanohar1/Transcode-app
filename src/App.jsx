import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Information from './Information';
import Video from './Video';
import Transcode from './Transcode';
import Uploading from './Uploading';

import { useState } from 'react';

function App() {

  return (
    <Router>
      <Routes>

        {/* Login page
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} /> */}
          
          <Route path="/" element={<Navigate to="/assetTranscoding" replace />} />
          <Route path="/assetTranscoding" element={<Home />}>
            {/* <Route index element={<div>Select an option from the sidebar.</div>} /> */}
            <Route path="Information" element={<Information />} />
            <Route path="Transcode" element={<Transcode />} />
            <Route path="Video" element={<Video />} />
            <Route path="Uploading" element={<Uploading />} />
          </Route>

        {/* Fallback */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
