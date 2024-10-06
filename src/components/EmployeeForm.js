import React, { useEffect, useState } from 'react';
import { createEmployee, updateEmployee } from '../api';

const EmployeeForm = ({ editingEmployee, setEditingEmployee, refreshEmployees }) => {
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empMobile, setEmpMobile] = useState('');
    const [empSal, setEmpSal] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (editingEmployee) {
            setEmpName(editingEmployee.empName);
            setEmpEmail(editingEmployee.empEmail);
            setEmpMobile(editingEmployee.empMobile);
            setEmpSal(editingEmployee.empSal);
            setIsEditMode(true);
        } else {
            setEmpName('');
            setEmpEmail('');
            setEmpMobile('');
            setEmpSal('');
            setIsEditMode(false);
        }
    }, [editingEmployee]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditMode) {
            await updateEmployee(editingEmployee.empId, { empName, empEmail, empMobile, empSal });
        } else {
            await createEmployee({ empName, empEmail, empMobile, empSal });
        }
        refreshEmployees(); // Refresh employee list after add/edit
        setEditingEmployee(null); // Reset editing state
    };

    return (
        <div className="container mt-5">
            <h2>{isEditMode ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">{isEditMode ? 'Update' : 'Add'}</button>
                {isEditMode && (
                    <button 
                        type="button" 
                        className="btn btn-secondary ml-2" 
                        onClick={() => setEditingEmployee(null)}>
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};

export default EmployeeForm;
