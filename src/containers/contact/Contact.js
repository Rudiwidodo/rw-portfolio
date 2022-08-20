import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './Contact.css'

export default function Contact() {

    const [alertContact, setAlertContact] = useState({ open: false, status: false, message: '' });
    const [data, setData] = useState({
        nama: '',
        email: '',
        pesan: ''
    });

    const handleAlert = () => {
        if (data.nama === '') {
            setAlertContact({ open: true, status: false, message: 'nama tidak bolek kosong' });
            setTimeout(() => {
                setAlertContact({ open: false, status: false });
            }, 1000);
        } else if (data.email === '') {
            setAlertContact({ open: true, status: false, message: 'email tidak bolek kosong' });
            setTimeout(() => {
                setAlertContact({ open: false, status: false });
            }, 1000);
        } else if (data.pesan === '') {
            setAlertContact({ open: true, status: false, message: 'pesan tidak bolek kosong' });
            setTimeout(() => {
                setAlertContact({ open: false, status: false });
            }, 1000);
        } else {
            setAlertContact({ open: true, status: true });
            setTimeout(() => {
                setAlertContact({ open: false, status: false });
            }, 1000);
        }
    }

    return (
        <div className='contact-container' id='Contact'>
            <div className='contact-parent'>
                <div className='contact-title'>
                    <h3>Contact</h3>
                    <div className='line'></div>
                </div>
                <div className='contact-card'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='contact-card-title'>
                                <h5>Segera Hubungi</h5>
                                <span><i className="bi bi-envelope"></i></span>
                            </div>
                            <div className='contact-card-icon'>
                                <a href="https://web.facebook.com/ruditjah.ploskulcomunity/">
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a href="https://www.instagram.com/rudhi_wid098/">
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a href="https://github.com/rudiwidodo069">
                                    <i className='bi bi-github'></i>
                                </a>
                            </div>
                            <div className='contact-card-bg'>
                                <p>kirim pesan email disini</p>
                                <div className='detail-contact-bg'></div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='contact-card-form'>
                                {
                                    alertContact.open ? <Footer message={alertContact.status} err={alertContact.message} /> : ''
                                }
                                <form action=''>
                                    <div className="mb-2">
                                        <label htmlFor="name" className="form-label">Nama</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="name" name='nama' onChange={e => setData({ nama: e.target.value })} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" name='email' className="form-control" id="email" aria-describedby="email" onChange={e => setData({ email: e.target.value })} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="message" className="form-label">Pesan</label>
                                        <textarea className="form-control" id="message" name='pesan' rows="3" onChange={e => setData({ pesan: e.target.value })}></textarea>
                                    </div>
                                    <button className='btn btn-send' onClick={handleAlert}>Kirim</button>
                                </form >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}
