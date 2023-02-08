import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../utils/routes'

//Icons
import { BsSpotify } from 'react-icons/bs'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { BiLibrary } from 'react-icons/bi'

//Styles
import './SideBar.scss'

const links = [
    {
        name:"Главная",
        icon: (
            <BsFillHouseDoorFill />
        ),
        url:routes.main
    },
     {
        name:"Поиск",
        icon: (
            <RiSearchLine />
        ),
        url:routes.search
    },
     {
        name:"Медиатека",
        icon: (
            <BiLibrary />
        ),
        url:routes.mediateka
    }
]

const SideBar = () => {

  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <BsSpotify style={{fontSize:"40px"}} />
            <span>Spotify</span>
        </div>
        <div className="sidebar__link">
            {
                links.map((item) => (
                    <NavLink className="sidebar__link__item" 
                    to={item.url}
                    key={item.url}
                    >
                        <div className="icon">
                            {item.icon}
                        </div>
                        {item.name}
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default SideBar