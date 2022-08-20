import React, { useState } from 'react';
import './Navbar.css';

export default function Nanvbar() {
    const [active, setActive] = useState({ open: true, value: 0 });
    const links = ["Home", "About", "Resume", "Contact"];

    return (
        <nav className='navbar fixed-top'>
            <div className='navbar-container'>
                <div className='navbar-parent'>
                    <div className='navbar-title primary-text'>
                        <h1>Rudi Widodo</h1>
                    </div>
                    <div className='parent-navbar-list'>
                        <ul className='navbar-list-box'>
                            {
                                links.map((value, i) => {
                                    return (
                                        <li
                                            key={i}
                                            onClick={() => setActive({ open: true, value: i })}
                                            className='navbar-list'>
                                            <a
                                                href={`#${links[i]}`}
                                                className={active.value === i ? 'navbar-list-link highlighted-text' : 'navbar-list-link'}
                                            >{value}</a>
                                        </li>
                                    )
                                })
                            }
                            <li className='mobile-nav'>
                                {
                                    active.open ? <div
                                        onClick={() => setActive({ open: false })}
                                        className='nav-icon'>
                                        <i className="bi bi-list"></i>
                                    </div> : <div
                                        onClick={() => setActive({ open: true })}
                                        className='nav-icon'>
                                        <i className="bi bi-x-lg"></i>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className={active.open ? 'navbar-list-box-mobile d-none' : 'navbar-list-box-mobile d-flex'}>
                    {
                        links.map((value, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => setActive({ value: i, open: true })}
                                    className='navbar-list-mobile'>
                                    <a
                                        href={`#${links[i]}`}
                                        className={active.value === i ? 'navbar-list-link highlighted-text' : 'navbar-list-link'}
                                    >{value}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav >
    );
}
