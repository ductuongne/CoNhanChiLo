import React from 'react'
import { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";



const closeMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('show');
    }
}

const Menu = () => {
    return (
        <>
            <Link to="/" onClick={closeMobileMenu}>Trang Chủ</Link>
            <Link to="/lasotuvi" onClick={closeMobileMenu}>Lá Số Tử Vi</Link>
            <Link to="/thongdiep" onClick={closeMobileMenu}>Thông Điệp</Link>
            <Link to="/tarot" onClick={closeMobileMenu}>Tarot</Link>
            <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" onClick={closeMobileMenu}>Liên Hệ</Link>
        </>
    )
}

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <Link to="/">
                        <img className='logo' src="../../assets/logo.png" alt="Cổ Nhân Chi Lộ" />
                    </Link>
                    <nav className='nav-menu'>
                        <Menu />

                    </nav>
                    <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
                    <nav className={`mobile-menu ${open ? "show" : ""}`}>
                        <Menu />
                        <div className='close' onClick={() => {
                            if (setOpen(!open)) {
                                setOpen(false);
                                closeMobileMenu;
                            }

                        }}>X</div>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header;