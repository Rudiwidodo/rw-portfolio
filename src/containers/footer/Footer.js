import React from 'react';

import './Footer.css';

export default function Footer({ message, err }) {
    return (
        <div className={`${message ? 'alert alert-success d-flex align-items-center' : 'alert alert-danger d-flex align-items-center'}`} role="alert">
            <div>
                {
                    err.length !== 0 ? err : 'pengiriman pesan berhasil'}
            </div>
        </div>
    )
}
