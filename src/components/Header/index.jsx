import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

//Icons
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

//Styles
import './Header.scss'

const Header = () => {

    const [nextStatePath, setNextPath] = useState([])

    const [active, setActive] = useState({
        prev:false,
        next:false
    })

    const navigate = useNavigate()   
    const location = useLocation()

    useEffect(() => {
        if (window.history?.state?.idx && nextStatePath?.length ) {
            setActive({
                prev: true,
                next: true
            })
        } else if (window.history?.state?.idx){
            setActive({
                prev: true,
                next: false
            })
        } else {
            setActive({
                prev: false,
                next: true
            })
        }
    }, [location.pathname])

    const handleNext = () => {
        if (active.next && nextStatePath.length) {
            navigate(nextStatePath[0])
            setNextPath(nextStatePath.filter((url,idx) => {
                if (idx !==0) {
                    return url
                }
                return
            }))
        }
    }

    const handlePrev = () => {
        if (active.prev) {
            setNextPath([...nextStatePath, location.pathname])
            navigate(-1)
        }
    }

    return (
        <div className='header'>
            <div className="header__arrows">
                <div 
                    className={
                        `header__arrows__prev ${active.prev ? "active" : ""}`
                    }
                >
                    <MdOutlineArrowBackIosNew onClick={handlePrev} />
                </div>
                <div
                    className={
                        `header__arrows__next ${active.next ? "active" : ""}`
                    }
                >
                    <MdOutlineArrowForwardIos onClick={handleNext} />
                </div>
            </div>
            <div className="header__login">
                <a className='reg' href="/">Зарегистрироваться</a>
                <button><a href="">Войти</a></button>
            </div>
        </div>
    )
}

export default Header