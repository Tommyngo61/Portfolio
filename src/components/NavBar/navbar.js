import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import MessageIcon from '@mui/icons-material/Message';


export default function NavBar() {
    return(
        <nav className='navbar'>
            <Link className="logoLink">TN.</Link>
            <div className="desktopMenu">
                <Link to="intro" className="desktopMenuListItem">Home</Link>
                <Link to="aboutMeSection" className="desktopMenuListItem">About</Link>
                <Link to="works" className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn">
                <MessageIcon/>Contact Me
            </button>
        </nav>
    )
}
