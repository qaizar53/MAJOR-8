import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
    const [state, setState] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAToken, backendUrl } = useContext(AdminContext);

    const onSubmithandler = async (event) => {
        event.preventDefault();

        try {

            if (state === "Admin") {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })

                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {

            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form onSubmit={onSubmithandler} className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-87.5">

                <p className=" text-2xl font-semibold m-auto">
                    <span className="text-blue-500"> {state} </span> Login
                </p>

                <div className="w-full mt-4">
                    <p className="text-sm text-blue-400">Email</p>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-lg mt-3 border-[#DADADA]"
                        type="email"
                        required
                    />
                </div>

                <div className="w-full mt-4">
                    <p className="text-sm text-blue-400">Password</p>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg mt-3 border-[#DADADA]"
                        type="password"
                        required
                    />
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-8">
                    Login
                </button>

                {state === "Admin" ? (
                    <p
                        className="text-md cursor-pointer text-blue-500 mt-3"
                        onClick={() => setState("Doctor")}
                    >
                        Login as Admin
                    </p>
                ) : (
                    <p
                        className="text-md cursor-pointer text-blue-500 mt-3"
                        onClick={() => setState("Admin")}
                    >
                        Login as Doctor
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;



//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-87.5">

//         {/* Toggle Buttons */}
//         <div className="flex mb-6">
//           <button
//             onClick={() => setstate("admin")}
//             className={`flex-1 py-2 rounded-l-xl ${
//               state === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             Admin
//           </button>
//           <button
//             onClick={() => setstate("doctor")}
//             className={`flex-1 py-2 rounded-r-xl ${
//               state === "doctor" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             Doctor
//           </button>
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           {state === "admin" ? "Admin Login" : "Doctor Login"}
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded-lg"
//             value={email}
//             onClick={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded-lg"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             {state === "admin" ? "Login as Admin" : "Login as Doctor"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
