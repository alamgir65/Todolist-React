import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const gotoAbout = (e)=>{
        navigate('/about');
    }
    return (
        <div>
            <button onClick={gotoAbout}>goto about</button>
            <nav style={{display:'flex',justifyContent:'center',gap:'20%',padding:'10px',background:'lightgray'}}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/user-list'}>User</Link>
            </nav>
        </div>
    );
};

export default Navbar;