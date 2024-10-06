import React, { useState } from 'react';
import { loginEmployee } from '../api';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
    debugger
        // Constructing the payload
        const payload = {
            empEmail: email,
            password: password,
        };
    console.log(payload );
    
        try {
            // Sending the payload to the loginEmployee function
            const response = await loginEmployee(payload);
            alert(response.data); // Show login success message
            onLogin(); // Notify parent component to update login status
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };
    

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" 
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                           required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" 
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                           required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
