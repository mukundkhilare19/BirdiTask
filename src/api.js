import axios from 'axios';

const API_URL = 'http://localhost:8084/api';

export const registerEmployee = (employee) => {
    return axios.post(`${API_URL}/auth/register`, employee);
};

export const loginEmployee = (loginData) => {
    return axios.post(`${API_URL}/auth/login`, loginData);
};

export const getAllEmployees = () => {
    
    return axios.get(`${API_URL}/employees`);
};

export const createEmployee = (employee) => {
    return axios.post(`${API_URL}/employees`, employee);
};

export const updateEmployee = (id, employee) => {
    return axios.put(`${API_URL}/employees/${id}`, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}/employees/${id}`);
};
