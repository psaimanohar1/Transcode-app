import React from "react";

function Video () {

    return (
        <>

        <p>this is a video components</p>
        <video 
  className="w-96 h-56 rounded-lg shadow-lg" 
  controls
>
  <source src="/example.mp4" type="video/mp4" />
</video>
        </>
    )
}

export default Video;