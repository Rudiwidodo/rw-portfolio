import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.css'

export default function Contact() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAlert = async (e) => {
        e.preventDefault();

        if (!nama || !email || !pesan) {
            return toast.error('silahkan masukan data dengan benar !');
        }

        try {
            setLoading(true)

            const { data } = await axios.post('https://api-v1-portfolio.herokuapp.com/portfolio/send-email', {
                email: email,
                nama: nama,
                pesan: pesan
            });

            setLoading(false);
            toast.success(data.message);

        } catch (error) {
            setLoading(false);
            toast.error(
                error.response && error.response.data.message ? error.response.data.message : error.message
            );
        }
    }

    return (
        <div className='contact-container' id='Contact'>
            <div className='contact-parent'>
                <ToastContainer position='top-right' limit={1} />
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
                                <form action='' onSubmit={handleAlert}>
                                    <div className="mb-2">
                                        <label htmlFor="name" className="form-label">Nama</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="name" name='nama' onChange={evt => setNama(evt.target.value)} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" name='email' className="form-control" id="email" aria-describedby="email" onChange={evt => setEmail(evt.target.value)} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="message" className="form-label">Pesan</label>
                                        <textarea className="form-control" id="message" name='pesan' rows="3" onChange={evt => setPesan(evt.target.value)}></textarea>
                                    </div>
                                    {
                                        loading ? <button className='btn btn-send' disabled>Sedang Dikirim ....</button> : <button className='btn btn-send'>Kirim</button>
                                    }
                                </form >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}
