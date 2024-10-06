import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../api';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const fetchEmployees = async () => {
        const response = await getAllEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees(); // Refresh the list
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Employees</h2>
            <EmployeeForm 
                editingEmployee={editingEmployee} 
                setEditingEmployee={setEditingEmployee} 
                refreshEmployees={fetchEmployees} 
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empEmail}</td>
                            <td>{emp.empMobile}</td>
                            <td>{emp.empSal}</td>
                            <td>
                                <button 
                                    className="btn btn-warning btn-sm" 
                                    onClick={() => setEditingEmployee(emp)}>Edit</button>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => handleDelete(emp.empId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
