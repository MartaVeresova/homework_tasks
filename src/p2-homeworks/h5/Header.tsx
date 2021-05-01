import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.menu}>
            <div className={s.submenu}>
                <NavLink to="/pre-junior" className={s.preJunior}>pre-junior</NavLink>
                <NavLink to="/junior" className={s.junior}>junior</NavLink>
                <NavLink to="/junior-plus" className={s.juniorPlus}>junior+</NavLink>
                <img src="https://www.westonschools.org/wp-content/uploads/2018/01/homework-icon-1.png"
                     width="50px"/>
            </div>
        </div>
    )
}

export default Header
