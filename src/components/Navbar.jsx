import React from 'react'


const Navbar = () => {

    return (
        <div className='navbar__container '>
            <div className="logoDiv">
                <h1 className="logo">
                    <strong>Job</strong>Recruit
                </h1>
            </div>


            <div className="menu">
                <li className="menuList">Jobs</li>
                <li className="menuList">About</li>
                <li className="menuList">Contact</li>
                <li className="menuList">Login</li>
                <li className="menuList">Register</li>
            </div>
        </div>
    )
}

export default Navbar
