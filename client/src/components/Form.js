// EnrollmentForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const EnrollmentForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        fee: '',
        phone: '',
        age: '',
        selectedBatch: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEnrollment = async () => {
        try {
            const response = await fetch('https://yoga-form-9ncx.vercel.app/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            console.log(data);

            if (response.status === 422 || !data) {
                window.alert(data.error);
                console.log(data.error);
            } else {
                window.alert(data.message);
                //enrollment successfully
                navigate('./thankyou');
                console.log(data.message);
            }
        } catch (error) {
            window.alert(error);
            console.log('Error during enrollment:', error);
        }
    };

    return (
        <div className="enrollment-form">
            <h2>Enrollment Form</h2>
            <div className='label_adjust'>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Select Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>
                    Select Batch:
                    <select name="selectedBatch" value={formData.selectedBatch} onChange={handleChange}>
                        <option value="">Select Batch</option>
                        <option value="6-7AM">6-7AM</option>
                        <option value="7-8AM">7-8AM</option>
                        <option value="8-9AM">8-9AM</option>
                        <option value="5-6PM">5-6PM</option>
                    </select>
                </label>
                <label>
                    Fee(Only 500rs):
                    <input type="number" name="fee" value={formData.fee} onChange={handleChange} />
                </label>
                <button onClick={handleEnrollment}>Enroll</button>
            </div>
        </div>
    );
};

export default EnrollmentForm;
