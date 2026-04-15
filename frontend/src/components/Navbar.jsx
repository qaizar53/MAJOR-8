import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Navbar = () => {
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

            <img src={assets.logo} alt="" className='w-44 cursor-pointer' onClick={() => navigate("/")} />

            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5f6fff] hidden' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5f6fff] hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'> ABOUT</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5f6fff] hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5f6fff] hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token
                        ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />

                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>

                                    <p onClick={() => navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>

                                </div>
                            </div>
                        </div>
                        :
                        <button onClick={() => navigate("/login")}
                            className='bg-[#5f6fff] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>
                }

                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden' alt="" />

                {
                    showMenu && (
                        <div className="fixed inset-0 bg-black/40 z-20"
                            onClick={() => setShowMenu(false)} />
                    )
                }

                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-white z-30 shadow-lg transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"
                    }`}>

                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <img
                            src={assets.cross_icon}
                            alt=""
                            className="w-6 cursor-pointer"
                            onClick={() => setShowMenu(false)}
                        />
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col items-start gap-6 px-6 text-lg font-medium">

                        <NavLink onClick={() => setShowMenu(false)} to='/'>
                            <li className='px-4 py-2 rounded-2xl inline-block'>Home</li>
                        </NavLink>

                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                            <li className='px-4 py-2 rounded-2xl inline-block'>All Doctors</li>
                        </NavLink>

                        <NavLink onClick={() => setShowMenu(false)} to='/about'>
                            <li className='px-4 py-2 rounded-2xl inline-block'>About</li>
                        </NavLink>

                        <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                            <li className='px-4 py-2 rounded-2xl inline-block'>Contact</li>
                        </NavLink>

                        {!token && (
                            <button
                                onClick={() => {
                                    navigate("/login")
                                    setShowMenu(false)
                                }}
                                className="bg-[#5f6fff] text-white px-6 py-2 rounded-full mt-4"
                            >
                                Login
                            </button>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar