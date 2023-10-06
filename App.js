// src/App.js
import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './EmployeeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const addEmployee = async (employeeData) => {
    try {
      const response = await fetch('http://localhost:5000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        const newEmployee = await response.json();
        setEmployees([...employees, newEmployee]);
      } else {
        throw new Error('Failed to add employee');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Employee Management</h1>
      <EmployeeForm onSubmit={addEmployee} />
      <table style={{ margin: '0 auto' }}>
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border">Role</th>
            <th className="border">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
}

export default App;
