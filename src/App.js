import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeList from './components/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLogin = () => {
        
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Employee Management</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={() => setIsLoggedIn(false)}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={() => setShowRegister(!showRegister)}>
                                    {showRegister ? 'Back to Login' : 'Register'}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            {isLoggedIn ? (
                <EmployeeList />
            ) : showRegister ? (
                <Register />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
