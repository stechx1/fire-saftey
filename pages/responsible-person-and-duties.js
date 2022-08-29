import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import styles from '../styles/About.module.css'

const ResponsiblePersonAndDuties = () => {
    return (
        <>
            <div className={` pt-5 d-flex flex-column gap-3 ${styles.support} `}>
                <h1 className='fs-4 fw-bold'>Responsible Person and Your Duties</h1>
                <span style={{ fontSize: '14px' }}>Businesses and charities that are not clearly domestic premises must conduct a fire risk assessment. It is the responsibility of the &apos;Responsible Person&apos; to address these issues.</span>
                <span style={{ fontSize: '14px' }}>Those who control or have a degree of control over certain areas within a building are defined as Responsible Persons under the Fire Safety Order. Owners, employers, or occupiers may fall into this category.</span>
            </div>

            <div className="pt-5">
                <Featurebox secHeading="The ‘responsible person’ is required to:" pHeading="" paras={[]} image="/Images/FeatureBox/Rectangle 2.png" points={['Carry out a Fire Risk Assessment', 'Provide and maintain general fire precautions to the extent that is appropriate', 'Monitor and review the Risk Assessment and revise as appropriate', 'Inform staff and/or their representative of the identified risks', 'Plan for an emergency', 'Provide staff information, instruction and training', 'Nominate persons to assist', 'Cooperate and coordinate with other ‘responsible persons’ in the building where necessary']} />
            </div>
            <div className="pt-5">
                <Featurebox secHeading="Other areas for consideration" pHeading="" paras={[]} image="/Images/FeatureBox/Rectangle 2.png" reverse={true} points={['Means For Detecting & Giving Warning in case of fire', 'Means of Escape & Emergency Lighting', 'Fire Safety Signs', 'Firefighting Equipment', 'Prevention of false automatic fire alarms']} />
            </div>

            <div className={` pt-5 d-flex flex-column gap-3 ${styles.support} `}>

                <span style={{ fontSize: '14px' }}>If some parts of the building are not under the employer&apos;s control, for example, if the workplace is shared with other people, the employer should be informed</span>
                <span style={{ fontSize: '14px' }}>In the areas they control, the person who has control (landlord, owner, employer etc) or has the responsibility to ensure compliance with the Fire Safety Order may require communication and cooperation between all parties in order to ensure fire safety provisions, firefighting measures, evacuation procedures, etc</span>
            </div>
            <div className='pt-5'>
                <Featurebox secHeading="Do you need help with your responsible person duties?" pHeading="" paras={['We provide weekly and monthly testing for all types of fire alarm and emergency lighting systems for all types of businesses. ', 'It is a requirement for all businesses with fire alarms or emergency lighting systems to test their systems regularly. Keeping your systems up-to-date and maintained by a competent person is a requirement to remain legally compliant.', "When you're responsible for a number of properties and have conflicting workloads, it can be difficult to ensure that periodic tests take place each week/month at the same time", 'Our engineers work across London and the Home counties, which makes it easy for us to schedule your checks into our route planner and in doing so keeping costs down. ']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>

            <div className="pt-5 text-center">
                <p className='fw-bold'>We carry BAFE accreditations, IS09001, hold FIA and FPA memberships and are members of the National <br /> Association of Fire Door Inspectors, so you can be sure that you are in safe hands</p>
                <p style={{ fontSize: '14px' }}>Red Fire Safety is confident we can help you regardless of how many sites you manage</p>
                <p style={{ fontSize: '14px' }}>Find out more on our company and our Weekly / Monthly attendance visits by calling <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>

            <div className="pt-5">
                <Anniversary />

            </div>
        </>
    )
}

export default ResponsiblePersonAndDuties