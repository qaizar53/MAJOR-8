import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from 'react-toastify'
import axios from "axios";

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (!docImg) {
        return toast.error("Image not selected")
      }

      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      //console.log formData
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      }

      else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">

      <p className="text-2xl font-semibold mb-6 text-gray-700">
        Add Doctor
      </p>

      <div className="flex flex-col lg:flex-row gap-8 overflow-y-scroll">

        {/* Image Upload */}
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload"
              className="w-32 h-32 object-cover border-2 border-dashed rounded-lg p-2"
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-sm text-gray-500 text-center">
            Upload Doctor <br /> Image
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex-1">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Side */}
            <div className="space-y-2.5">

              <div>
                <p className="text-gray-600 mb-1">Doctor Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full p-2 border rounded-md focus:outline-blue-500"
                  onChange={(e) => setName(e.target.value)}
                  value={name} />
              </div>

              <div>
                <p className="text-gray-600 mb-1">Doctor Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 border rounded-md focus:outline-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
              </div>

              <div>
                <p className="text-gray-600 mb-1">Doctor Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full p-2 border rounded-md focus:outline-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>

              <div>
                <p className="text-gray-600 mb-1">Experience</p>
                <select onChange={(e) => setExperience(e.target.value)}
                  value={experience} className="w-full p-2 border rounded-md">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={`${i + 1} year`}>
                      {i + 1} Year
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Fees</p>
                <input
                  type="number"
                  placeholder="Fees"
                  required
                  className="w-full p-2 border rounded-md focus:outline-blue-500"
                  onChange={(e) => setFees(e.target.value)}
                  value={fees} />
              </div>

            </div>

            {/* Right Side */}
            <div className="space-y-4">

              <div>
                <p className="text-gray-600 mb-1">Speciality</p>
                <select onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality} className="w-full p-2 border rounded-md">
                  <option>General physician</option>
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatricians</option>
                  <option>Neurologist</option>
                  <option>Gastroenterologist</option>
                </select>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Education</p>
                <input
                  type="text"
                  placeholder="Education"
                  required
                  className="w-full p-2 border rounded-md focus:outline-blue-500"
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree} />
              </div>

              <div>
                <p className="text-gray-600 mb-1">Address</p>
                <input
                  type="text"
                  placeholder="Address 1"
                  required
                  className="w-full p-2 border rounded-md mb-2"
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1} />
                <input
                  type="text"
                  placeholder="Address 2"
                  required
                  className="w-full p-2 border rounded-md"
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2} />
              </div>

            </div>

          </div>

          {/* About */}
          <div className="mt-6">
            <p className="text-gray-600">About Doctor</p>
            <textarea
              rows={2}
              placeholder="Write about doctor"
              required
              className="w-full p-2 border rounded-md focus:outline-blue-500"
              onChange={(e) => setAbout(e.target.value)}
              value={about} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Add Doctor
          </button>

        </div>
      </div>
    </form>
  );
};

export default AddDoctor;