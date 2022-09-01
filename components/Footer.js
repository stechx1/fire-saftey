/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    const router = useRouter();
    return (
        <>
            <div className={` ${styles.logosContainer}`}>
                <div className='row'>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 1.png" alt="client" className='img-fluid' width={140} />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 2.png" alt="client" className='img-fluid' width={140} />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 3.png" alt="client" className='img-fluid' width={140} />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 4.png" alt="client" className='img-fluid' width={140} />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 5.png" alt="client" className='img-fluid' width={140} />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 my-4'>
                        <img src="/Images/Client/client logo 6.png" alt="client" className='img-fluid' width={140} />
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="container-fluid">
                    <div className={`row text-light mx-4 ${styles.row} ` }>
                        <div className="col-md-3 col-sm-6  d-flex flex-column gap-4 ">
                            <img src="/Images/Client/Client logo 3 (1).png" alt="door check" className='img-fluid' width={150} />
                            <span>Your saftey is our business</span>
                        </div>
                        <div className={`col-md-6 col-sm-6  d-flex ${styles.navs} `} >
                            <div className='d-flex flex-column gap-3'>
                                <span style={{cursor:'pointer'}} onClick={()=>{router.push('/')}}>Home</span>
                                <span style={{cursor:'pointer'}}>Privacy Policy</span>
                                <span style={{cursor:'pointer'}} onClick={()=>{router.push('/contact')}}>Contact Us</span>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <span style={{cursor:'pointer'}}>Regulations</span>
                                <span style={{cursor:'pointer'}}>Responsible Persons</span>
                                <span style={{cursor:'pointer'}}>Risk Assessment</span>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <span style={{cursor:'pointer'}}>Sprinkler Servicing</span>
                                <span style={{cursor:'pointer'}}>Fire Stopping</span>
                                <span style={{cursor:'pointer'}}>Emergency Lightning</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6  d-flex flex-column gap-1 ">
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