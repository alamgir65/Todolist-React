import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import UserList from './pages/UserList';
import Navbar from './components/Navbar';
import Todolist from './pages/Todolist';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Todolist/>} />
                <Route path='/user-list' element={<UserList/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    );
};

export default App;
