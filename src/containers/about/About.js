import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container" id="About">
      <div className="about-parent">
        <div className="about-title">
          <h3>About</h3>
          <div className="line"></div>
        </div>
        <div className="about-card">
          <div className="row">
            <div className="col-md-6 col-left">
              <div className="card-image-about">
                <img
                  src={require('../../assets/images/profile/profile.jpeg')}
                  alt={''}
                />
              </div>
            </div>
            <div className="col-md-6 col-right">
              <p className="about-text">
                Halo, Nama Saya Rudi Widodo, Lahir di Kota Karanganyar Jawa
                Tengah. Saya lulusan baru dan memiliki beberapa skil dalam
                bahasa pemrograman. Saya berfokus pada bidang web programming,
                dalam menggapai tujuan saya sebagai web developer, saya selalu
                mengasah skil saya dengan membuat beberapa project pribadi.
              </p>
              <div className="about-options">
                {/* <a href="#Contact">
                                    <button className='btn primary-btn'>Hubungi</button>
                                </a> */}
                <a href="#Project">
                  <button className="btn highlighted-btn">Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
