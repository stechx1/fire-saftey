import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from './features/Feature.module.css'

const BasicFireSafety = () => {
  return (
    <>
         <div className=' pt-5 container text-center '>
                <h1 className={` ${headingStyles.pHeading} my-3`}>Basic Fire Safety & Fire Marshall Training  </h1>
            </div>
            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className={` ${headingStyles.secHeading} my-3`}>Would you like to Train as a Fire Marshall?</h1>
                <p className={headingStyles.smallpara}>Fire marshal training will prepare you to protect yourself and others in the event of a fire. This course covers a variety of topics, such as identifying fires, following fire procedures, evacuating employees, and putting out small fires.</p>
            </div>
            <div className="pt-5 ">
                <Featurebox secHeading="" pHeading="What is a Fire Marshal  " paras={["Property owners in the United Kingdom are legally required to comply with the Regulatory Reform (Fire Safety) Order 2005's fire safety regulations. In the event of a fire, this law describes the precautions that should be taken to ensure the safety of occupants. ", 'To fully comply with fire regulations, certain steps should be taken, such as conducting a fire risk assessment, implementing fire safety protocols, and training occupants on what to do if a fire occurs.', 'In a company or managed building, a fire marshal is responsible for fire safety, prevention, and evacuation procedures. ', 'All fire marshals must complete special fire marshal training. They’ll  receive Fire Marshall Certification after finishing their training, proving that they are competent to fulfill their fire safety duties.', 'Fire marshals are responsible for preventing fires in workplaces, care homes, hotels, event spaces, etc. They should evacuate their coworkers, customers, or both to a safe place and make sure the evacuation plan is followed and the buildings are evacuated calmly, quickly, and efficiently.']} points={[]} image="/Images/fire-marshall.jpeg" />
            </div>
            <div className="pt-5">
                <Featurebox reverse={true} secHeading="" pHeading="How Many Fire Marshals Do I Need?  " paras={['The number of fire marshals necessary per location is determined by a variety of factors, including:']} points={['The size of the premises ', 'Who will be on the premises ', 'The number of persons Working on the premises at any given time', 'Accessibility', 'The number of floors in the building ']} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>
            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <p className={headingStyles.smallpara}>In order to determine the number of fire marshals required, a fire risk assessment must be conducted. The risk assessment report will provide details on what fire risks the building has and how to solve them. The report will also include how many Fire Marshals are needed to handle the risk.</p>
                <p className={headingStyles.smallpara}>We provide training at the customers&apos; premises with relevant materials such as training manuals and pocket guides to all participants. Upon successful completion of the course, a certificate is issued.</p>
                <p className={headingStyles.smallpara}>It is mandatory to have a clear outdoor area of at least 5m x  5m for the practical elements of the fire protection courses.</p>
                <p className={headingStyles.smallpara}>Since it may not be possible for all staff to attend the same course at the same time, booking multiple courses at the same time will receive a discount on each course in addition to the first. </p>
                <p className={`${headingStyles.smallpara} py-2 `}> </p>
                
            </div>
                <div  style={{padding:'23px 125px'}}>
                <Featurebox secHeading="" pHeading="We currently offer the courses:" paras={[]} points={['Basic Fire Protection Training', 'Fire Warden/Marshal Instruction', 'Fire Warden/Marshal Refresher', 'Emergency First Aid at Work', 'First Aid for Appointed Persons']} image="/SVGs/Basic Fire Training.svg" />
                </div>

            <div className="pt-5">
                <Anniversary />

            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>To book your staff members onto our fire training course please email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
            
    </>
  )
}

export default BasicFireSafety