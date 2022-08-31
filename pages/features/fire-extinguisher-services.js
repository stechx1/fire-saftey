import React from 'react'
import styles from './Feature.module.css'
import Anniversary from '../../components/Anniversary'
import Featurebox from '../../components/Featurebox'
const FireExtinguisherServices = () => {
    return (
        <>
            <div className={`container ${styles.mainContainer} `}>
                <div className="left d-flex flex-column gap-3 px-3" style={{width:'85%'}}>
                    <h3 className={styles.pHeading}>Fire Extinguisher Servicing <br /> and Maintenance </h3>
                    <p className={styles.smallpara}>In the event of a fire, fire extinguishers are normally the first thing people will look for to tackle the fire. An extinguisher is useful for preventing the spread of fires but also for allowing people to safely leave a building in case of an emergency.  </p>
                    <p className={styles.smallpara}>Regular servicing and visual inspections are the only way to ensure your fire extinguisher is functioning when needed.</p>
                </div>
                <div className="right w-100 d-flex justify-content-center align-items-center ">
                    <img src='/Images/Features/Fire Extinguisher 1.png' alt="Fire Alarm Servicing" className='img-fluid' style={{ width: '15%' }} />
                </div>
            </div>

            <div className="pt-5">
                <Featurebox secHeading="" pHeading="Installation and Maintenance " paras={['Fire extinguishers must be present in all commercial premises in accordance with the Regulatory Reform (Fire Safety) Order 2005. In accordance with the Order, fire extinguishers must be serviced annually - a service Red Fire Safety can provide. ', 'Whether you need a water or foam fire extinguisher or CO2 or dry powder extinguishers, we cover all types. You can be confident that our team will take the time to visit your property and assess the best options for you, keeping your budget and requirements in mind at all times. We can also take the pressure of maintenance off your hands and provide annual service checks and repairs if necessary. ']} reverse={true} points={[]} image="/Images/Fire-Extinguisher page.jpeg" />
            </div>

            <div className={` pt-5 d-flex flex-column gap-3 ${styles.support} `}>
                <h1>Maintanance</h1>
                <span>The Annual Maintenance of your extinguisher helps to ensure that your extinguisher can be relied upon if needed, and this is where Red Fire Safety can help.</span>
                <span style={{ fontSize: '14px' }}>Our fully trained and qualified engineers carefully and methodically inspect each extinguisher to ensure they are in the required working condition.</span>
            </div>

            <div className="pt-5">
                <div className='text-center pt-3 '>
                    <h1 className=' fw-bold fs-2'>What checks do we complete during the visits?</h1>
                    <p className='text-muted'>While we work in accordance with the current regulations, we perform the following maintenance on every fire extinguisher: </p>
                </div>
                <Featurebox secHeading=" " pHeading="" paras={['', '']} points={['The full-service process as defined in BS5306.', 'Ensure each fire extinguisher pressure is correct (not too high or low).', "Check the weight of the extinguisher against the manufacturer's recommendations", 'Replace all necessary small consumable parts, such as "o" rings and tags. (Included as standard in our costs) ', 'Ensure all hoses/horns are clear of obstruction and free from damage.', 'Ensure the body of the fire extinguisher is in the correct condition (free of rust/damage).', 'Ensure each extinguisher is free of obstructions.', "Ensure each fire extinguisher's instructions are clear and distinguishable.", 'Ensure each fire extinguisher is correctly mounted with correct signage', 'Ensure each fire extinguisher is clean.', 'Report any non-compliances, such units due to discharge tests or failures.', 'Complete and provide the required paperwork to the client.', 'Create a full asset register detailing the location, extinguisher type, condition upon testing and any relevant notes.']} image="/Images/checks.jpg" />
            </div>

            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '16px', fontWeight: '600' }} >Red Fire will ensure your Fire Extinguishers are ready should you ever need them.</p>
                <p style={{ fontSize: '14px' }}>Find out more about our preventative maintenance and call out services we provide by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
            <div className="pt-5">
                <Anniversary />

            </div>

        </>
    )
}

export default FireExtinguisherServices