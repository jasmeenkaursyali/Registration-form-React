import './App.css';
import { React, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');

  const [errors, setErrors] = useState({});

  const isValidate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!phoneno.trim()) {
      newErrors.phoneno = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phoneno)) {
      newErrors.phoneno = 'Phone number must be 10 digits.';
    }

    if (!gender) newErrors.gender = 'Please select a gender.';

    if (!course) newErrors.course = 'Please select a course.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phoneno') setPhoneno(value);
    if (name === 'gender') setGender(value);
    if (name === 'course') setCourse(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidate()) {
      console.log('Form submitted:', { name, email, phoneno, gender, course });
      setName('');
      setEmail('');
      setPhoneno('');
      setGender('');
      setCourse('');
      alert('Registration Successful!');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        {/* Name Field */}
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleInput} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} <br />

        {/* Email Field */}
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleInput} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>} <br />

        {/* Phone Number Field */}
        <label>Phone Number</label>
        <input type="text" name="phoneno" value={phoneno} onChange={handleInput} />
        {errors.phoneno && <span style={{ color: 'red' }}>{errors.phoneno}</span>} <br />

        {/* Gender Field */}
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleInput}
        />{' '}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={handleInput}
        />{' '}
        Female
        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>} <br />
        <br/>
        {/* Courses Dropdown */}
        <label>Course</label>
        <select name="course" value={course} onChange={handleInput}>
          <option value="">--Select a Course--</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
          <option value="NodeJS">NodeJS</option>
        </select>
        {errors.course && <span style={{ color: 'red' }}>{errors.course}</span>} <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
