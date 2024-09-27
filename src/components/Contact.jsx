import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


export default function RegistrationForm() {
  // Initialize useForm with validation rules

  const [btnDisabled, setBtnDisabled] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      createdAt: new Date(),
      first_name: '',
      last_name: '',
      emailId: '',
      age: '',
      gender: '',
      mobilenumber: '',
      pan_no: '',
      adhaar_no: '',
      status: true
    }
  });


    function onSubmit(values) {

        console.log(values);
        
        // Make the POST request to the API
        setBtnDisabled(true);

        axios.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', values)
          .then(response => {
            console.log('Data submitted successfully:', response.data);
            reset();
            toast.success('Thank you, we contact you shortly!!');
            setBtnDisabled(false);

            // You can add additional logic here, like showing a success message or redirecting
          })
          .catch(error => {
            console.error('There was an error submitting the data:', error);
            toast.error('Something, went wrong!!');
            setBtnDisabled(false);

            // Handle the error (e.g., show an error message)
          });
      }
  

  return (
    <div id='contact' className="container my-5">
        <h6 className='small-heading text-center mb-3'>Contact Us</h6>
        <h2 className="service-cards-heading text-center mb-5">
        Get in Touch with Us – Fill out the form below
        </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {/* First Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              {...register("first_name", { required: "First name is required", minLength: { value: 2, message: "First name must be at least 2 characters" } })}
              type="text"
              className="form-control"
              id="first_name"
              placeholder="John"
            />
            {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
          </div>

          {/* Last Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              {...register("last_name", { required: "Last name is required", minLength: { value: 2, message: "Last name must be at least 2 characters" } })}
              type="text"
              className="form-control"
              id="last_name"
              placeholder="Doe"
            />
            {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Email Address */}
          <div className="col-md-6 mb-3">
            <label htmlFor="emailId" className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              {...register("emailId", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              type="email"
              className="form-control"
              id="emailId"
              placeholder="john.doe@example.com"
            />
            {errors.emailId && <p className="text-danger">{errors.emailId.message}</p>}
          </div>

          {/* Mobile Number */}
          <div className="col-md-6 mb-3">
            <label htmlFor="mobilenumber" className="form-label">
              Mobile Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("mobilenumber", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })}
              type="tel"
              className="form-control"
              id="mobilenumber"
              placeholder="1234567890"
            />
            {errors.mobilenumber && <p className="text-danger">{errors.mobilenumber.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Age */}
          <div className="col-md-4 mb-3">
            <label htmlFor="age" className="form-label">
              Age <span className="text-danger">*</span>
            </label>
            <input
              {...register("age", { required: "Age is required", valueAsNumber: true, min: { value: 18, message: "You must be at least 18 years old" } })}
              type="number"
              className="form-control"
              id="age"
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>

          {/* Gender */}
          <div className="col-md-4 mb-3">
            <label htmlFor="gender" className="form-label">
              Gender <span className="text-danger">*</span>
            </label>
            <select {...register("gender", { required: "Gender is required" })} className="form-select" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
          </div>

          {/* PAN Number */}
          <div className="col-md-4 mb-3">
            <label htmlFor="pan_no" className="form-label">
              PAN Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("pan_no", { required: "PAN number is required", pattern: { value: /^[A-Z]{5}[0-9]{4}[A-Z]$/, message: "Invalid PAN number" } })}
              type="text"
              className="form-control"
              id="pan_no"
              placeholder="ABCDE1234F"
            />
            {errors.pan_no && <p className="text-danger">{errors.pan_no.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Aadhaar Number */}
          <div className="col-md-6 mb-3">
            <label htmlFor="adhaar_no" className="form-label">
              Aadhaar Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("adhaar_no", { required: "Aadhaar number is required", pattern: { value: /^[0-9]{12}$/, message: "Invalid Aadhaar number" } })}
              type="text"
              className="form-control"
              id="adhaar_no"
              placeholder="123456789012"
            />
            {errors.adhaar_no && <p className="text-danger">{errors.adhaar_no.message}</p>}
          </div>
        </div>

        <div className='text-center pt-3'>
        <button disabled={btnDisabled} type="submit" className="btn btn-primary px-4 py-2 fw-bold">Submit</button>
        </div>
      </form>
    </div>
  );
}
