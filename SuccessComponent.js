import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const location = useLocation();
  const form = location.state;

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <p><strong>First Name:</strong> {form.firstName}</p>
      <p><strong>Last Name:</strong> {form.lastName}</p>
      <p><strong>Username:</strong> {form.username}</p>
      <p><strong>E-mail:</strong> {form.email}</p>
      <p><strong>Phone No:</strong> {form.phoneNo}</p>
      <p><strong>Country:</strong> {form.country}</p>
      <p><strong>City:</strong> {form.city}</p>
      <p><strong>Pan No:</strong> {form.panNo}</p>
      <p><strong>Aadhar No:</strong> {form.aadharNo}</p>
    </div>
  );
};

export default SuccessComponent;
