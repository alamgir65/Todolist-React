import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import UserList from './components/UserList';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Welcome name={'Alamgir'} email={'alamgir@istt.edu.bd'} />} />
                <Route path='/user-list' element={<UserList/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    );
};

export default App;
