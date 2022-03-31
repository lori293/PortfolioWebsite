import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Porfolio() {
    return (
        <div className='profile-container' id='home'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/srivastavalori/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://www.behance.net/srivastava_lori'>
                                <i className='fa fa-behance-square'></i>
                            </a>
                            <a href='https://twitter.com/srivastava_lori'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Lori Srivastava</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Developer",
                                        1000,
                                        "UI/UX Designer",
                                        1000,
                                        "React/React Native Dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Build creatives and applications with front and back end operations using modern UI.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='https://drive.google.com/drive/folders/1CzEyQ4d_xSTi8kdR-i6g-gYJPmgUqS9V?usp=sharing'>
                        <button className='btn btn-outline-primary'>
                            {""}
                            View Projects{" "}
                        </button>
                        </a>
                        <a href='Lori-Srivastava-Resume.pdf' download='Lori-Srivastava-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    )
}
