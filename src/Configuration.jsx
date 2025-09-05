import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Configuration() {

    const {qcconfig} = useOutletContext();

    return (
        <div>
            <p>This is the Configuration page</p>
            {qcconfig &&
            <pre className="mt-4 p-2 bg-gray-100 rounded max-h-[500px] overflow-auto">
              {JSON.stringify(qcconfig, null, 2)}
              </pre>
             
            
            }
            
        </div>
    )
}

export default Configuration;