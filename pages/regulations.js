import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from './features/Feature.module.css'

const Regulations = () => {
    return (
        <>
            <div className=' pt-5 container text-center '>
                <h1 className={` ${headingStyles.pHeading} my-3`}>Regulations </h1>
            </div>
            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className={` ${headingStyles.secHeading} my-3`}>Fire Safety Legislation</h1>
                <p className={headingStyles.smallpara}>The Fire Safety (Regulatory Reform) Order 2005 came into effect in England and Wales on October 1, 2006. Most premises, except a single dwelling, require the &apos;responsible person&apos; to adopt a self-assessment approach to fire safety. The legislation does not only apply to offices, hotels, and factories. Additionally, it applies to the common areas of multiple dwellings, such as blocks of flats and houses in multiple occupations (HMOs). </p>
                <p className={headingStyles.smallpara}>Assessment of risks is emphasized clearly in the Order. Any person with some level of control over premises must take reasonable steps to reduce fire risks and ensure that people can safely escape in case of fire.</p>
            </div>
            <div className="pt-5">
                <Featurebox secHeading="" pHeading="Key Fire Safety Order Requirements " paras={['The key requirements are that the responsible person must: ']} points={['Carry out, and record, a fire risk assessment identifying any possible dangers and risks. ', 'Identify people, employees, visitors or members of the public on your premises, who may be especially at risk.', 'Reduce, or where possible remove, the risk of fire and take precautions to deal with the remaining risks. ', 'Put in place protection measures if there are flammable or explosive materials used or stored on the premises. ', 'Develop an emergency plan should a fire occur which includes evacuation procedures.', 'Regularly review the risk assessment and emergency plan.']} image="/Images/regulation-page.jpeg" />
            </div>
            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className={headingStyles.secHeading}>Fire Safety Preparation and Training.</h1>
                <p className={headingStyles.smallpara}>To make sure that your business complies with fire safety legislation Red Fire Safety can carry out a fire risk assessment to identify the potential risks and measures you can put in place to ensure that you comply with the legislation. </p>
            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>To find out more give us a call on  <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
            <div className="pt-5">
                <Anniversary />

            </div>
        </>
    )
}

export default Regulations