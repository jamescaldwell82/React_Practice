import React, { useState } from 'react'
import './Header.css'

export default function Header(props) {
    const [toggleNav, setToggleNav] = useState(false);

    const handleContentChange = (content) => {
        props.handleContentCallback(content);
        setToggleNav(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header className="p-3 text-light">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-brand" onClick={() => handleContentChange('Home')}>React Practice</button>
                <div className="hamburger-outer" onClick={() => setToggleNav(true)}>
                    <div className="hamburger-inner"></div>
                    <div className="hamburger-inner"></div>
                    <div className="hamburger-inner"></div>
                </div>
                {toggleNav &&
                    <div className="menu bg-primary text-center p-3">
                        <button onClick={() => setToggleNav(false)} className="close-menu">&times;</button>
                        <ul>
                            <li onClick={() => handleContentChange('Home')}>Profile</li>
                            <li onClick={() => handleContentChange('About')}>About</li>
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}
