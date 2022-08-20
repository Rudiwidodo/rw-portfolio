import React, { useState } from 'react';
import './Resume.css';

// assets-image-icon-svg
import Pendidikan from '../../assets/Materials/Resume/education.svg';
import Pekerjaan from '../../assets/Materials/Resume/work-history.svg';
import program from '../../assets/Materials/Resume/programming-skills.svg';
import hobi from '../../assets/Materials/Resume/interests.svg';

// json file
import jsonFile from './Resume.json';

export default function Resume() {
    const [active, setActive] = useState({ open: true, value: 0 });

    return (
        <div className='resume-container' id='Resume'>
            <div className='resume-parent'>
                <div className='resume-title'>
                    <h3>Resume</h3>
                    <div className='line'></div>
                </div>
                <div className='resume-card'>
                    <div className='row'>
                        <div className='col-lg-6 col-left-resume'>
                            <div className='row'>
                                <div className='col-2'>
                                    <div className='container-left-resume-icon'>
                                        <div className='resume-icon'>
                                            <img src={Pendidikan} alt={""} />
                                        </div>
                                        <div className='resume-icon'>
                                            <img src={Pekerjaan} alt={""} />
                                        </div>
                                        <div className='resume-icon'>
                                            <img src={program} alt={""} />
                                        </div>
                                        <div className='resume-icon'>
                                            <img src={hobi} alt={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <div className='container-left-resume-list'>
                                        <div className='resume-list'>
                                            {
                                                jsonFile.resume.map((value, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className={active.value === i ? 'resume-title actived' : 'resume-title'}
                                                            onClick={() => setActive({ value: i })}
                                                        >
                                                            <span className={active.value === i ? 'actived-title' : ''}>{value.title}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-right-resume'>
                            <div className='card-resume-text'>
                                {
                                    jsonFile.resume.map((value, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={active.value === i ? 'actived-content' : 'card-text'}>
                                                <div className='resume-text-title'>
                                                    <h5>{value.title}</h5>
                                                </div>
                                                <div className='resume-text-content'>
                                                    {
                                                        value.detail.map((v, key) => {
                                                            return (
                                                                <div
                                                                    id={key}
                                                                    className='content-box'>
                                                                    <div className='content-circle'></div>
                                                                    <div className='content-title'>{v.nama}
                                                                        <p className='content-sub-title'>{v.kota}</p>
                                                                    </div>
                                                                    {
                                                                        v.tahun ? <div className='content-block-title'>
                                                                            {v.tahun}
                                                                        </div> : ''
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
