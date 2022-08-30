import React from 'react'
import styles from '../styles/Contact.module.css'
import Anniversary from '../components/Anniversary'

const Contact = () => {
    return (
        <>
            <div className='text-center d-flex flex-column py-5'>
                <span className={styles.pHeading}>Contact Us</span>
                <span>Contact us for a quote or join us</span>
                <div className='d-flex gap-2 justify-content-center  ' >
                    <i style={{cursor:'pointer'}} className="fa fa-instagram fs-3" aria-hidden="true"></i>
                    <i style={{cursor:'pointer'}} className="fa fa-linkedin-square fs-3" aria-hidden="true"></i>
                </div>
            </div>
            <div className={`container d-flex justify-content-between  py-5 ${styles.imgContainer} `}>
                <div className="d-flex flex-column align-items-center text-center px-5">
                    <img src="/Images/Contact/Group 1.png" alt="Fire1" className='img-fluid' width={60} height={90} />
                    <h3 className={`${styles.secHeading} mt-3`}>Address</h3>
                    <span className={styles.FeaturesHeading}>Red Fire Safety Limited, Lockheed House & <br /> Unit 1, 238 Green Lane, London, SE9 3TL</span>
                </div>
                <div className="d-flex flex-column align-items-center text-center px-5">
                    <img src="/Images/Contact/Vector.png" alt="Fire1" className='img-fluid' width={90} height={90} />
                    <h3 className={`${styles.secHeading} mt-3`}>Email</h3>
                    <span className={styles.FeaturesHeading}>  info@redfiresafety.com</span>
                </div>
                <div className="d-flex flex-column align-items-center text-center px-5">
                    <img src="/Images/Contact/phone.png" alt="Fire1" className='img-fluid' width={50} height={50} />
                    <h3 className={`${styles.secHeading} mt-3`}>Call Us for any enquiry</h3>
                    <span className={styles.FeaturesHeading}>01689 493 641</span>
                </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <img src="/Images/map.png" alt="map" className='img-fluid' />
            </div>

            <div className="mt-5">
                <Anniversary />
            </div>
        </>
    )
}

export default Contact