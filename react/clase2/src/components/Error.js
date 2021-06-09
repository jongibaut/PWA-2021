import React from 'react';
const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-danger mt-2">
            <p>{mensaje}</p>
        </div>
     );
}
 
export default Error;