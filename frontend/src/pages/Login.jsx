import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { token, setToken, backendUrl } = useContext(AppContext)

  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.error)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.error)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        {/* Header */}
        <div>
          <h2 className="text-2xl mb-2 font-semibold text-center text-gray-800 ">{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>

          <p className="text-sm text-gray-500 text-center mt-2">Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment</p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-4">

          {
            state === 'Sign Up' &&
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Full Name"
              />
            </div>
          }

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          {state === 'Sign Up' ?
            <p className="text-sm text-gray-500 text-center mt-2">Already have an account? <span onClick={() => setState('Login')} className="text-blue-600 cursor-pointer underline"> Login here</span></p>
            :
            <p className="text-sm text-gray-500 text-center mt-2">Create a new account? <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer underline"> Click here</span> </p>
          }

        </form>

      </div>

    </div>
  );
};

export default Login;