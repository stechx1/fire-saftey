import React from 'react'
import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light py-3 ${styles.mainContainer} `}>
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light "style={{cursor:'pointer'}} onClick={()=>{router.push('/')}}  aria-current="page">Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} >Risk Assessment</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} >Fire Training</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} >Services</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} >Products</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} onClick={()=>{router.push('/about-us')}}>About Us</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} >Legislation</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link text-light" style={{cursor:'pointer'}} onClick={()=>{router.push('/contact')}} >Contact</a>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar