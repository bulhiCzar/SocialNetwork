import React from 'react'
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Container_01_KMJ.jpg" width="40px" alt="logo" />
        </header>
    )
}

export default Header