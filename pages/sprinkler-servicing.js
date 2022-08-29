import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import styles from '../pages/features/Feature.module.css'

const SprinklerServicing = () => {
    return (
        <>
            <div className={`container ${styles.mainContainer} `}>
                <div className="left w-75 d-flex flex-column gap-3 px-3">
                    <h3 className={styles.pHeading}>Sprinkler Servicing & Maintenance</h3>
                    <p className={styles.smallpara}>For sprinkler systems to function properly during a fire, they need to be maintained and serviced regularly. A properly maintained fire sprinkler system will maintain your certificate of conformity, which may be required by insurance companies. However, a properly functioning sprinkler is essential to help save property and lives during a fire. </p>
                    <p className={styles.smallpara}>Red Fire Safety offers comprehensive service and maintenance for sprinkler systems. We can inspect, repair and maintain all types of sprinkler systems, even if we didn’t fit them originally. </p>
                </div>
                <div className="right w-100 d-flex justify-content-center align-items-center ">
                    <img src='/Images/FeatureBox/Rectangle 2.png' alt="Fire Alarm Servicing" className='img-fluid' />
                </div>
            </div>

            <div className="container">
                <p className={styles.smallpara}>With a reputation for quality and reliability, our experienced, certified engineers are familiar with all service and maintenance procedures. </p>
                <p className={styles.smallpara}>Maintenance varies depending on the type of fire sprinkler system, but our service typically includes:</p>
                <div className='d-flex flex-column gap-2 px-5 my-3 text-muted'>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2 " aria-hidden="true"></i>
                        Water supplies (including overhauling and returning to service pumps)
                    </span>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                        Control valves & associated equipment
                    </span>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                        Flow switches, test valves etc
                    </span>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                        Inspection of installation pipework and testing of sprinkler heads
                    </span>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                        Continued conformity
                    </span>
                    <span style={{ fontSize: "smaller" }}>
                        <i style={{ fontSize: '14px' }} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                        Training and liaison with client on good housekeeping procedures
                    </span>
                </div>
                <p className={styles.smallpara}>In addition to Domestic, Residential, and Commercial fire sprinkler systems, we provide maintenance contracts for a wide range of buildings, including offices, healthcare institutions, universities, schools, and government buildings.</p>
            </div>

            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className=' fw-bold fs-2 my-3'>Flow Switch Testing</h1>
                <p className='text-muted'>Flow switch testing should be conducted every three months in accordance with current standards.  A flow switch is used to monitor the flow of different types of substances - usually air or water. It senses different pressure generated from different flows.</p>
            </div>

            <div className="pt-5">
                <Featurebox secHeading="" reverse={false} pHeading="What we offer " paras={['With Red Fire Safety you can be assured that your sprinkler system will perform as designed and installed in the event of a fire. ', 'All commercial sprinkler systems should be serviced with BSEN 12845 standards which is generally one major visit per year and one minor visit per year']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>


            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className=' fw-bold fs-2 my-3'>Houses of Multiple Occupancy (HMO)  </h1>
                <p className='text-muted'>When a fire breaks out in a multi-occupancy building, sprinkler systems can be crucial. A fire in a dwelling with a working sprinkler system has never caused multiple fire related deaths in the UK. </p>
            </div>

            <div className="pt-5">
                <Featurebox secHeading="" reverse={true} pHeading="Weekly Fire Pump & Alarm Testing " paras={['Commercial fire sprinkler systems are designed to protect life and property. ', 'A sprinkler fire pump engine, along with any reserves you may have, should be started and turned over every week to ensure they are working correctly and comply with British Standards. It is also your responsibility to maintain the sprinklers regularly to ensure their efficiency should the need arise. ']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>

            <div className="pt-5">
                <Anniversary />
            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>For more information on how we can install, repair or maintain your sprinkler system, give  us a call on  <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>


        </>
    )
}

export default SprinklerServicing