import React from 'react'
import './Header.css'
import image from '../Assets/Images/image.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '../Redux Toolkit/ThemeSlices'

const Header = () => {


    const buttonLight = { backgroundColor: "white", color: "black" }
    const buttonDark = { backgroundColor: "#0f172a", color: "white" }

    const themeData = useSelector((store) => {
        return store.Theme
    })
    console.log(themeData);

    const dispatch = useDispatch()

    const handleToggleTheme = () => {
        dispatch(setTheme());
    };

    return (
        <div className="Header">

            <div className="headerUpper">
                <p>I have changed theme to <span>{themeData === "light" ? "Light" : "Dark"}</span></p>
            </div>

            <div className="headerBottom">

                <div className="logo">
                    <img src={image} alt="Img" />
                </div>

                <div className="tab">
                    <ul>
                        <Link to="/Home">
                            <li>Home</li>
                        </Link >
                        <Link to="/Contact">
                            <li>Contact</li>
                        </Link>
                        <Link to="/Service">
                            <li>Service</li>
                        </Link>
                    </ul>

                </div>

                <div className="toggleButton">
                    <button onClick={handleToggleTheme}
                        style={themeData === "light" ? buttonDark : buttonLight}>
                        {themeData === "light" ? "toggle theme to Dark" : "toggle theme to Light"}</button>


                </div>
            </div>

        </div>

    )
}

export default Header