import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";


const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (

        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo center mainHeading">Weather Sensors</Link>
                    {(toggleMenu || screenWidth > 500) && (
                        <ul id='nav-mobile' className='left list'>
                            <li className='items homeMobile' onClick={toggleNav}><Link to={'/'}>Home</Link></li>
                            <li className='items' onClick={toggleNav}><Link to={'about'}>About</Link></li>
                            <li className='items' onClick={toggleNav}><Link to={'table'}>Table of Records</Link></li>
                            <li className='items' onClick={toggleNav}><Link to={'charts'}>Charts</Link></li>
                        </ul>
                    )}
                    <a className='navIcon' onClick={toggleNav}>
                        <i className='material-icons'>menu</i>
                    </a>
                </div>
            </nav>


        </div>


    )
}

export default Navigation

/*
 <li><i className="large material-icons navicon">menu</i></li>
.navicon {
    font-size: 50px!important;
    display: none!important;
}
 */