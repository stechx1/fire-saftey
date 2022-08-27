import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={`gap-4 ${styles.logosContainer}`}>
                <div>
                    <img src="/Images/Client/client logo 1.png" alt="client" className='img-fluid' width={140} />
                </div>
                <div>
                    <img src="/Images/Client/client logo 2.png" alt="client" className='img-fluid' width={140} />
                </div>
                <div>
                    <img src="/Images/Client/client logo 3.png" alt="client" className='img-fluid' width={140} />
                </div>
                <div>
                    <img src="/Images/Client/client logo 4.png" alt="client" className='img-fluid' width={140} />
                </div>
                <div>
                    <img src="/Images/Client/client logo 5.png" alt="client" className='img-fluid' width={140} />
                </div>
                <div>
                    <img src="/Images/Client/client logo 6.png" alt="client" className='img-fluid' width={140} />
                </div>
            </div>

            <div className={styles.footer}>
                <div className="container-fluid">
                    <div className="row text-light mx-4">
                        <div className="col-md-4 d-flex flex-column gap-4 w-25">
                            <img src="/Images/Client/Client logo 3 (1).png" alt="door check" className='img-fluid' width={150} />
                            <span>Your saftey is our business</span>
                        </div>
                        <div className="col-md-4 d-flex w-50" style={{gap:'20%'}}>
                            <div className='d-flex flex-column gap-3'>
                                <span>Home</span>
                                <span>Privacy Policy</span>
                                <span>Contact Us</span>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <span>Site Map</span>
                                <span>Site Map</span>
                                <span>Site Map</span>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <span>Site Map</span>
                                <span>Site Map</span>
                                <span>Site Map</span>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-column gap-1 w-25">
                            <span>Red Fire Safety Limited </span>
                            <span>Lockheed House <br /> Unit 1, 238 Green Lane <br /> London <br /> SE9 3TL</span>
                            <span>Telephone: 01689 493 641 <br /> Email Address: info@redfiresafety.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center text-light" style={{background:'#C32128'}}>
                <span>Copyright 2021 @ Red Fire Saftey</span>
            </div>

        </>
    )
}

export default Footer