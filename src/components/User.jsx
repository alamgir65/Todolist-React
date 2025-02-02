import React from 'react';

const User = ({UserName,designation,color}) => {
    return (
        <div>
            <div style={{background:color,padding:'20px',margin:'10px'}}>
                <h1>{UserName}</h1>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default User;