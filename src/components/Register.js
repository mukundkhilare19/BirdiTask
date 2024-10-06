import React, { useState } from 'react';
import { registerEmployee } from '../api';

const Register = () => {
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empMobile, setEmpMobile] = useState('');
    const [empSal, setEmpSal] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const employee = { empName, empEmail, empMobile, empSal, password };
        try {
            const response = await registerEmployee(employee);
            setMessage(response.data); // Show registration success message
        } catch (err) {
            setMessage('Registration failed. Email might already exist.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" 
                           value={empName} 
                           onChange={(e) => setEmpName(e.target.value)} 
                           required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" 
                           value={empEmail} 
                           onChange={(e) => setEmpEmail(e.target.value)} 
                           required />
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" className="form-control" 
                           value={empMobile} 
                           onChange={(e) => setEmpMobile(e.target.value)} 
                           required />
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <input type="number" className="form-control" 
                           value={empSal} 
                           onChange={(e) => setEmpSal(e.target.value)} 
                           required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" 
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                           required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
