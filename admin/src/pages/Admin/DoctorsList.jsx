import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (

    <div className="w-full px-6 py-4">
      <h2 className="text-2xl font-semibold mb-6">All Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cove hover:bg-blue-600 bg-indigo-200 transition-all duration-500 cursor-pointer"
            />

            {/* Doctor Details */}
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {item.name}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {item.speciality}
              </p>

              {/* Availability */}
              <div className="flex items-center gap-2 mt-4">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  readOnly
                  className="w-4 h-4 accent-green-500 cursor-pointer"
                />
                <p
                  className={`text-sm font-medium ${item.available
                    ? "text-green-600"
                    : "text-red-500"
                    }`}
                >
                  {item.available ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList