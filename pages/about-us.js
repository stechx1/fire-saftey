import React from 'react'
import Featurebox from '../components/Featurebox'
import styles from '../styles/About.module.css'
import Anniversary from '../components/Anniversary'

const AboutUs = () => {
    return (
        <>
            <div className={`container ${styles.mainContainer} `}>
                <div className={` d-flex flex-column gap-3 px-3 ${styles.left} `}>
                    <h3 className={styles.pHeading}>About Us</h3>
                    <p className={styles.smallpara}>Based in London, Red Fire Safety Services are a leading supplier in the Design, Installation, Commissioning, Servicing and Routine Maintenance of Fire, Products, Accessories and Systems.</p>
                    <p className={styles.smallpara}>We hold BAFE, ISO and Door Check accreditations as well as being members of the Fire Industry Association, Fire Protection Association and Federation of Small Businesses. Our engineers are industry approved and undertake regular refresher training & are constantly assessed to ensure we provide the best possible services.</p>
                    <p className={styles.smallpara}>We have just over 18 years’ experience in the industry, and our dedicated team has built up a trusting customer base with our progressive commitment to quality and service levels. Our customers are referred to as ‘partners’ as we work to a strategy maintaining compliance levels across all disciplines. </p>
                </div>
                <div className={styles.right}>
                    <img src='/Images/About.png' alt="frame" className='img-fluid' />
                </div>
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="" pHeading="Quality Service" paras={['We all at Red Fire Safety challenge processes to ensure that service levels remain industry leading and never underdeliver when it comes to customer service quality. Thanks to our many years of experience and genuine dedication to the industry, you can be assured of the very best when it comes to fire protection', '']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="" pHeading="Products" paras={["As a result of our partnerships with some of the industry's leading fire manufacturers, we are able to offer you the most innovative products and solutions. To name a few, Red Fire Safety installs and maintains equipment from the following suppliers:", '']} image="/Images/FeatureBox/Rectangle 2.png" reverse={true} points={['Haes', 'Kentec', 'Hyfire', 'C-Tec']} />
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="" pHeading="Maintainence" paras={['Our preventative maintenance service aims to mitigate any faults or problems before they occur. All systems are regularly checked, and records are kept of all visits and work.', '']} image="/Images/FeatureBox/Rectangle 2.png" points={[]} />
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="" pHeading="System" paras={['Providing a multi-solution for both commercial and residential customers, our Planning & Scheduling system has transformed our job management and communication further to ensure our customers are kept informed throughout the process.', '']} image="/Images/FeatureBox/Rectangle 2.png" reverse={true}  points={[]} />
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="" pHeading="Accrediations" paras={["As a result of our partnerships with some of the industry's leading fire manufacturers, we are able to offer you the most innovative products and solutions. To name a few, Red Fire Safety installs and maintains equipment from the following suppliers:", '']} image="/Images/FeatureBox/Rectangle 2.png" points={['Haes', 'Kentec', 'Hyfire', 'C-Tec']}  />
            </div>

            <div className={` pt-5 d-flex flex-column gap-3 ${styles.support} `}>
                <h1>Support</h1>
                <span>In addition to supporting our customers&apos; sites and equipment 24/7, we guarantee a response 24 hours a day, 7 days a week, 365 days a year</span>
                <span>Find out more about our company and our services by calling 01689 493 641 or email info@redfiresafety.com today</span>
            </div>

            <div className="pt-5">
            <Anniversary/>

            </div>
        </>
    )
}

export default AboutUs