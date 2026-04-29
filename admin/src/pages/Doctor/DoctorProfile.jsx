import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {
  const { profileData, setProfileData, getProfileData, dToken, currency, backendUrl } = useContext(DoctorContext)

  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  const updateProfile = async () => {
    try {

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      }

      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return profileData && (

    <div className="m-3 sm:m-5">

      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* Doctor Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={profileData.image}
            alt=""
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-xl border hover:bg-blue-100 cursor-pointer"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left">

          {/* Name */}
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {profileData.name}
            </p>
          </div>

          {/* Degree + Speciality + Experience */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-3 justify-center lg:justify-start">
            <p className="text-gray-600 text-sm sm:text-lg">
              {profileData.degree} - {profileData.speciality}
            </p>

            <button className="px-4 py-1 text-xs sm:text-sm bg-blue-100 text-blue-600 rounded-full">
              {profileData.experience}
            </button>
          </div>

          {/* About */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">
              About:
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {profileData.about}
            </p>
          </div>

          {/* Fees */}
          <div>
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              Appointment Fee:
              <span className="text-green-600 font-semibold ml-2">
                {currency}
                {
                  isEdit
                    ?
                    <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} />
                    :
                    profileData.fees
                }
              </span>
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">
              Address:
            </p>

            <p className="text-sm sm:text-base text-gray-600">
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} /> : profileData.address.line1}
              <br />
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} /> : profileData.address.line2}
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <input
              onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
              type="checkbox"
              checked={profileData.available}
              readOnly
              className="w-4 h-4 accent-blue-600"
            />

            <label className="text-sm sm:text-base text-gray-700 font-medium">
              Available
            </label>
          </div>

          {
            isEdit
              ? <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300" onClick={updateProfile}>
                Save
              </button>
              : <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsEdit(true)}>
                Edit
              </button>
          }

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile