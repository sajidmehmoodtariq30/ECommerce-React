import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mt-4 bg-color dark:text-white duration-200 flex items-center justify-around px-5 sm:py-5 font-medium'>
            {/* logo */}
            <NavLink to="/"
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:mx-4 mx-0 sm:text-3xl'
            >
                Eshop
            </NavLink>
            <p>All rights reserved by @Sajid Mehmood</p>
        </div>
    )
}

export default Footer