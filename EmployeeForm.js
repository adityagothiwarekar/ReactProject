// src/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, salary });
    setName('');
    setRole('');
    setSalary('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
