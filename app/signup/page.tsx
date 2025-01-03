import React from 'react'
import { FaUser, FaLock, FaEnvelope, FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-gray-600 text-center mb-6">Welcome! Please sign up to continue</p>
        <div className='relative mb-4'>
          <input 
            type="email"
            placeholder='Email' 
            required
            className="w-full px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaEnvelope className='absolute left-3 top-3 text-gray-400' />
        </div>
        <div className='relative mb-6'>
          <input 
              type="password"
              placeholder='Password' 
              required 
              className="w-full px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaLock className='absolute left-3 top-3 text-gray-400' />
        </div>
        <button 
          type='submit'
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Sign Up
        </button>

        <div className="relative my-6 text-center">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
            or continue with
          </span>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FaFacebook />
            Facebook
          </button>
          <button
            type="button" 
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            <FaGoogle />
            Google
          </button>
        </div>

        <div className='text-center mt-4'>
          <p className="text-gray-600">Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign in</a></p>
        </div>
      </form>             
    </main>
  )
}
