import React from 'react';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>

                <div className='profile-details'>

                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://web.facebook.com/ruditjah.ploskulcomunity/">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.instagram.com/rudhi_wid098/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://github.com/rudiwidodo069">
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, Saya <span className='highlighted-text'>Rudi Widodo</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                Web Developer
                            </h1>
                            <span className='profile-role-tagline'>
                                klik download untuk melihat cv
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <a href="#Contact">
                            <button className='btn primary-btn'>
                                Hubungi
                            </button>
                        </a>
                        <a href="CV.pdf" download={'rudi-widodo-cv.pdf'}>
                            <button className='btn highlighted-btn'>
                                Download CV
                            </button>
                        </a>
                    </div>

                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>

            </div>

        </div>
    )
}
