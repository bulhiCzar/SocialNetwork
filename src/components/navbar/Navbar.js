import React from 'react'
import NavbarItem from './NavbarItem'
import s from './Navbar.module.css'


const navbarList = [
    { title: 'Profile', icon: 'https://www.flaticon.com/svg/static/icons/svg/129/129840.svg' },
    { title: 'link', icon: 'https://www.flaticon.com/svg/static/icons/svg/129/129840.svg' }
]

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            {
                navbarList.map((item, idx) => {
                    return <NavbarItem item={item} key={idx}/>
                })
            }
        </nav>
    )
}

export default Navbar