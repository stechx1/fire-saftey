import React from 'react'
import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();
    return (
        <>
        <div className="container d-flex justify-content-between py-3 px-5">
          <img src="/Images/Red box logo.svg" alt="logo" className="img-fluid" width={150} />
          <div className='d-flex flex-column'>
            <span>Call the team today</span>
            <span>Mon - Fri 9am - 5pm</span>
            <span style={{color:'#e32213'}}>0808 168 7000</span>
          </div>
        </div>
            <nav className={`navbar navbar-expand-lg navbar-light py-3 ${styles.mainContainer} `}>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light " style={{ cursor: 'pointer' }} onClick={() => { router.push('/') }} aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{router.push('/fire-risk-assessments')}} className="nav-link text-light" style={{ cursor: 'pointer' }} >Risk Assessment</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{router.push('/basic-fire-safety')}} className="nav-link text-light" style={{ cursor: 'pointer' }} >Fire Training</a>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a style={{ cursor: 'pointer' }} className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a onClick={()=>{router.push('/features/fire-alarm-services')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Fire Alarm</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/features/fire-door-inspection')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Fire Door</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/features/fire-extinguisher-services')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Fire Extinguisher</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/emergency-lighting-servicing')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Emergency Lightining</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/sprinkler-servicing')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Sprinkler Servicing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a style={{ cursor: 'pointer' }} className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Safety
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a onClick={()=>{router.push('/basic-fire-safety')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Basic Fire Safety</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/fire-safety-services')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Fire Safety Services</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a onClick={()=>{router.push('/fire-safety-signage')}} style={{ cursor: 'pointer' }} className="dropdown-item" href="#">Fire Safety Signage</a></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link text-light" style={{ cursor: 'pointer' }} onClick={() => { router.push('/about-us') }}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { router.push('/evacuation-plans-and-drills')}} className="nav-link text-light" style={{ cursor: 'pointer' }} >Evacuation Plan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" style={{ cursor: 'pointer' }} onClick={() => { router.push('/contact') }} >Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar