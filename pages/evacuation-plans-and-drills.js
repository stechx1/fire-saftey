import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from './features/Feature.module.css'
const EvacuationPlanAndDrills = () => {
    return (
        <>
            <div className='text-center pt-5'>
                <h3 className={headingStyles.pHeading}>Evacuation Plans & Drills</h3>
            </div>
            <div className={`container ${headingStyles.mainContainer} pt-5 `}>
                <div className="left w-75 d-flex flex-column gap-3 px-3">
                    <h3 className={headingStyles.secHeading}>Why do I need an Evacuation plan?  </h3>
                    <p>If you&apos;re an employer, owner or occupier of premises that aren&apos;t a &apos;single private dwelling&apos; (a private home), it&apos;s your responsibility to keep people safe if there is a fire.</p>
                    <p className={headingStyles.smallpara}>Though prevention is always best, you are also required by law to make a detailed fire emergency plan so your people can keep themselves and members of the public out of danger.</p>
                </div>
                <div className="right w-100 d-flex justify-content-center align-items-center ">
                    <img src='/Images/FeatureBox/Rectangle 2.png' alt="Fire Stopping" className='img-fluid' />
                </div>
            </div>

            <div className={` pt-5 d-flex flex-column gap-1 ${headingStyles.pointsPara} `}>
                <h1 className='fw-bold fs-2'>What should be covered in your plan?</h1>
                <span className={`${headingStyles.smallpara} py-2`}>A simple plan must show that you have:</span>
                <span className={headingStyles.smallpara}>A suitable fire detection system.</span>
                <span className={headingStyles.smallpara}>A process for identifying false alarms. </span>
                <span className={headingStyles.smallpara}>A clear understanding of who calls 999. </span>
                <span className={headingStyles.smallpara}>A clear passageway to all escape routes.  </span>
                <span className={headingStyles.smallpara}>Suitable routes and exits for people to escape.  </span>
                <span className={headingStyles.smallpara}>Clearly marked escape routes – these should be as short and direct as possible. </span>
                <span className={headingStyles.smallpara}>Emergency doors that open easily – and emergency lighting if it is needed.</span>
                <span className={headingStyles.smallpara}>Providing training so your employees know how to use the escape routes </span>
                <span className={headingStyles.smallpara}>Set out a safe meeting point for staff.  </span>
                <span className={headingStyles.smallpara}>Consider the needs of anyone who might not be able to escape quickly if there&apos;s a fire – for example, wheelchair users or people with visual impairments.  </span>
            </div>
            <div className={` pt-5 d-flex flex-column gap-1 ${headingStyles.pointsPara} `}>
                <h1 className='fw-bold fs-2'>What else should you consider in your fire plan? </h1>
                <span className={`${headingStyles.smallpara} py-2`}>Other important topics to cover include:</span>
                <span className={headingStyles.smallpara}>What to do on discovering a fire. </span>
                <span className={headingStyles.smallpara}>How to warn others if there is a fire.</span>
                <span className={headingStyles.smallpara}>Calling the fire brigade.  </span>
                <span className={headingStyles.smallpara}>Evacuation of the premises including those particularly at risk. </span>
                <span className={headingStyles.smallpara}>Power/process isolation.</span>
                <span className={headingStyles.smallpara}>Places of assembly and roll call. </span>
                <span className={headingStyles.smallpara}>Liaison with emergency services. </span>
                <span className={headingStyles.smallpara}>Identification of key escape routes.</span>
                <span className={headingStyles.smallpara}>What firefighting equipment you provide – and where it is located.  </span>
                <span className={headingStyles.smallpara}>Remember to test your plan by carrying out drills. </span>

            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '16px', fontWeight: '600' }} className="my-3">If you&apos;re having trouble formulating a plan, need some advice on General or Personal Emergency Evacuation Plans or need supervision with your fire drills,  Red Fire Safety will help you identify what it is you need in place to make your business safe. </p>
                <p style={{ fontSize: '14px' }}>Find out more about our PEEPs & GEEPS by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
            <div className="pt-5">
                <Anniversary />

            </div>
        </>
    )
}

export default EvacuationPlanAndDrills