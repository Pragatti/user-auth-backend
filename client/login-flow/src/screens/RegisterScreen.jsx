import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { registerUser } from "../hooks/useAuth";
const RegisterScreen = () => {
  const { register, handleSubmit ,formState: { errors },} = useForm()
  const [formMessage, setFormMessage] = useState(null);
  const submitForm = async(data) => {
     const result = await registerUser(data)
     console.log(result,"result")
     if (result.success) {
      setFormMessage({ type: 'success', message: result.message });
    } else {
      setFormMessage({ type: 'error', message: result.message });
    }

 }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
        <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          className={`w-full p-2 mt-1 text-sm border ${
            errors.first_name ? 'border-red-500' : 'border-gray-300'
          } rounded focus:ring focus:ring-blue-200 focus:outline-none`}
          placeholder="John Doe"
          {...register('first_name', { required: 'First Name is required' })}
        />
        {errors.first_name && (
          <span className="text-red-500 text-sm">{errors.first_name.message}</span>
        )}
      </div>
         
          <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          className={`w-full p-2 mt-1 text-sm border ${
            errors.last_name ? 'border-red-500' : 'border-gray-300'
          } rounded focus:ring focus:ring-blue-200 focus:outline-none`}
          placeholder="John Doe"
          {...register('last_name', { required: 'Last Name is required' })}
        />
        {errors.last_name && (
          <span className="text-red-500 text-sm">{errors.last_name.message}</span>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className={`w-full p-2 mt-1 text-sm border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded focus:ring focus:ring-blue-200 focus:outline-none`}
          placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className={`w-full p-2 mt-1 text-sm border ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          } rounded focus:ring focus:ring-blue-200 focus:outline-none`}
          placeholder="********"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
      {formMessage && (
        <div
          className={`mt-4 p-2 rounded ${
            formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {formMessage.message}
        </div>
      )}
    </div>
  );
};

export default RegisterScreen;
