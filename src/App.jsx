import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button';
import Home from './Home';
import Information from './Information.jsx';
// import Transcoding from './Transcoding.jsx';
import Video from './Video.jsx';
import Transcode from './Transcode';
import { Outlet } from 'react-router-dom'
import Uploading from './Uploading';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/AssetTranscoding" replace />} />

        <Route path="/AssetTranscoding" element={<Home />}> 
          <Route path="Information" element={<Information />} /> 
          <Route path="Transcode" element={<Transcode />} /> 
          <Route path="Video" element={<Video />} /> 
          <Route path='uploading' element={<Uploading/>} />
        </Route>

        
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
      
      {/* <Button>hi</Button>   */}
    </>
  )
}

export default App;
