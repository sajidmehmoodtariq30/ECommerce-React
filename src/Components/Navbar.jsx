import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { CgMenu } from 'react-icons/cg';
import DarkMode from './DarkMode';
import { MenuLinks } from '../../Api/Data';
import { SmallMenuLinks } from '../../Api/Data';


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='bg-color dark:text-white duration-200 flex items-center justify-between px-5 sm:py-5 font-medium'>
            {/* logo */}
            <NavLink to="/"
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:mx-4 mx-0 sm:text-3xl'
            >
                Eshop
            </NavLink>
            {/* Links */}
            <ul className='hidden sm:flex md:gap-5 gap-1 text-sm '>
                {
                    MenuLinks.map((data, index) => (
                        <li key={index}>
                            <NavLink
                                to={data.link}
                                className='flex flex-col items-center px-4 gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                            >
                                <p>{data.name}</p>
                                <hr className='w-2/3 border-none h-[1.5px] bg-gray-500 group hidden hover:bg-black dark:hover:bg-white duration-200' />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* Right Section */}
            <div className="flex items-center gap-4">
                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 duration-200' />
                <div className="group relative">
                    <FaUser className='text-gray-500 hover:text-black dark:hover:text-white duration-200 flex sm-hidden' />
                    <div className="group-hover:block hidden absolute dropdown-menue right-0 py-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-white shadow-md duration-200">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 ">
                            <p className='cursor-pointer hover:bg-primary/20 h-6 text-center dark:hover:bg-gray-800 duration-200 rounded-md font-semibold'>My Profile</p>
                            <p className='cursor-pointer hover:bg-primary/20 h-6 text-center dark:hover:bg-gray-800 duration-200 rounded-md font-semibold'>Orders</p>
                            <p className='cursor-pointer hover:bg-primary/20 h-6 text-center dark:hover:bg-gray-800 duration-200 rounded-md font-semibold'>Logout</p>
                        </div>
                    </div>
                </div>
                <button className='relative py-3'>
                    <NavLink to="/cart">
                        <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400 duration-200' />
                    </NavLink>
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-1 flex items-center justify-center text-xs'>4</div>
                </button>
                <div>
                    <DarkMode />
                </div>
                <CgMenu onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden text-xl text-gray-600 dark:text-gray-400 duration-200' />
            </div>
            {/* Sidebar Menue For Small Screen */}
            <div className={`absolute top-0 bottom-0 left-0 overflow-hidden bg-white dark:bg-gray-800 text-black dark:text-white transition-all z-40 ${visible ? 'w-full' : 'w-0'}`}>
                <button onClick={() => setVisible(false)} className="absolute top-5 right-10 text-2xl">X</button>
                <ul className="flex flex-col gap-4 p-10">
                    {SmallMenuLinks.map((data, index) => (
                        <li key={index}>
                            <NavLink
                                to={data.link}
                                className="text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                onClick={() => setVisible(false)}
                            >
                                {data.name}
                            </NavLink>
                            <hr className='bg-gray-600 dark:bg-white my-2' />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar