import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Transcode () {
    const {outputfile_url}  = useOutletContext();

    return(
        <>
        <p className='p-3 text-black'>Transcoded video to resolution </p>
        
            <video src={outputfile_url}
            controls className='h-auto w-96'></video>
    
        </>
    )
}

export default Transcode;