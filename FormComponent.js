import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = 'First Name is required';
    if (!form.lastName) tempErrors.lastName = 'Last Name is required';
    if (!form.username) tempErrors.username = 'Username is required';
    if (!form.email) tempErrors.email = 'E-mail is required';
    if (!form.password) tempErrors.password = 'Password is required';
    if (!form.phoneNo) tempErrors.phoneNo = 'Phone Number is required';
    if (!form.country) tempErrors.country = 'Country is required';
    if (!form.city) tempErrors.city = 'City is required';
    if (!form.panNo) tempErrors.panNo = 'Pan No. is required';
    if (!form.aadharNo) tempErrors.aadharNo = 'Aadhar No. is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: form });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
      {errors.firstName && <p>{errors.firstName}</p>}
    </div>

    <div>
      <label>Last Name</label>
      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
      {errors.lastName && <p>{errors.lastName}</p>}
    </div>

    <div>
      <label>Username</label>
      <input type="text" name="username" value={form.username} onChange={handleChange} />
      {errors.username && <p>{errors.username}</p>}
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
    </div>

    <div>
      <label>Password</label>
      <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>Show/Hide</button>
      {errors.password && <p>{errors.password}</p>}
    </div>

    <div>
      <label>Phone No.</label>
      <input type="text" name="phoneNo" value={form.phoneNo} onChange={handleChange} />
      {errors.phoneNo && <p>{errors.phoneNo}</p>}
    </div>

    <div>
      <label>Country</label>
      <select name="country" value={form.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      {errors.country && <p>{errors.country}</p>}
    </div>

    <div>
      <label>City</label>
      <select name="city" value={form.city} onChange={handleChange}>
        <option value="">Select City</option>
        {form.country === "India" && <>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </>}
        {form.country === "USA" && <>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
        </>}
      </select>
      {errors.city && <p>{errors.city}</p>}
    </div>

    <div>
      <label>Pan No.</label>
      <input type="text" name="panNo" value={form.panNo} onChange={handleChange} />
      {errors.panNo && <p>{errors.panNo}</p>}
    </div>

    <div>
      <label>Aadhar No.</label>
      <input type="text" name="aadharNo" value={form.aadharNo} onChange={handleChange} />
      {errors.aadharNo && <p>{errors.aadharNo}</p>}
    </div>

    <button type="submit" disabled={!Object.values(errors).every((err) => err === '')}>Submit</button>
  </form>
);
};

export default FormComponent;
