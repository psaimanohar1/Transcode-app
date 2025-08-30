import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Transcode () {
    const {outputfile_url}  = useOutletContext();

    return(
        <>
        <p>this is to render the transcoded files component</p>
        
            <video src={outputfile_url}
            controls className='h-auto w-96'></video>
    
        </>
    )
}

export default Transcode;