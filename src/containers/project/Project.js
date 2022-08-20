import React from 'react';
import './Project.css';

// import project file 
import project from './Project.file';

export default function Project() {
    return (
        <div className='project-container' id='Project'>
            <div className='project-parent'>
                <div className='project-title'>
                    <h3>Project</h3>
                    <div className='line'></div>
                </div>
                <div className='project-card'>
                    <div className='row'>
                        {
                            project.map(items => {
                                return (
                                    <div
                                        key={items.id}
                                        className="col-lg-4 p-2">
                                        <a href={items.link} className="link" target={items.target}>
                                            <div className="card bg-dark">
                                                <div className="card-body project-box-image">
                                                    <div className="card-img">
                                                        <img src={items.project} alt="project-01" className="img-project" />
                                                    </div>
                                                    <div className='card-box-image-detail'>
                                                        <h5>{items.title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
