import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from './features/Feature.module.css'

const WetAndDryRisers = () => {
    return (
        <>
            <div className='text-center pt-5'>
                <h3 className={headingStyles.pHeading}>Wet & Dry Risers Servicing & Maintenance </h3>
            </div>
            <div className={`container ${headingStyles.mainContainer} pt-5 `}>
                <div className="left w-75 d-flex flex-column gap-3 px-3">
                    <h3 className={headingStyles.secHeading}>Dry & Wet Risers </h3>
                    <p className={headingStyles.smallpara}>Red Fire Safety offers a comprehensive dry riser service for testing, routine maintenance and repairs. Our professional team have many years experience and have completed many hundreds of dry riser service contracts. Together with their wealth of experience our engineers carry vast inventory of spares to ensure they are equipped to perform on the spot fixes, if required. </p>
                    <p className={headingStyles.smallpara}>Our services include all the necessary dry riser testing, both annual pressure testing to 12 Bar as dictated by BS9990 and a 6 monthly visual Inspection. </p>
                </div>
                <div className="right w-100 d-flex justify-content-center align-items-center ">
                    <img src='/Images/FeatureBox/Rectangle 2.png' alt="Fire Stopping" className='img-fluid' />
                </div>
            </div>
            <div className={` pt-5 d-flex flex-column gap-3 ${headingStyles.support} `}>
                <h1 className='fw-bold fs-2'>Testing of Dry Risers </h1>
                <span>To ensure that the equipment is working properly, dry riser testing must be conducted every six months. There cannot be enough emphasis placed on the importance of a functional dry riser. Dry risers are vital to the fire brigade&apos;s fighting of fires. It may hinder their efforts to fight the fire if they cannot quickly and easily access the equipment or if it is defective, further endangering lives. </span>
            </div>

            <div className="pt-5">
                <Featurebox reverse={true} secHeading="" pHeading="Every 6 Months" paras={['It is necessary to visually inspect dry risers every 6 months to ensure there are no obvious signs of damage or vandalism. In the event that any parts are damaged or missing, it is important to document this and to repair or replace them as soon as possible. ', '']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>
            <div className="pt-5">
                <Featurebox reverse={false} secHeading="" pHeading="Annually" paras={['Every 12 months, all dry riser installations must undergo and pass an in-depth test. ', 'A physical test of the dry riser installation is conducted as part of this annual dry riser test.  Wet pressure tests (hydraulic pressure tests) are part of this process. A fire service approved hose and water pump are used to fill the system with water to a pressure of 12 bar (175psi) for a minimum of 15 minutes, testing for leaks.', 'In the event that the dry riser leaks, our engineers perform an initial air pressure test to reduce the risk of flooding. We test all valves, washers, seals, inlet and outlet valves, along with the dry riser cabinets and signage. ']} points={[]} image="/Images/annually.jpg" />
            </div>
            <div className=' pt-1 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <p > <p>In the aftermath of the test, the dry riser system is drained and outlet valves are closed and secured with padlocks and straps. Lastly, the inlet breeching cabinet is closed and locked. </p></p>
                <p >We can perform tests on your Dry or Wet riser installation to ensure it complies with British Standards and relevant building regulations.</p>
            </div>
            <div className=' pt-5 container text-center ' style={{ fontSize: '14px' }}>
                <h1 className=' fw-bold fs-2 my-3'>Dry Riser Wet Riser Differences </h1>
                <p style={{padding: '0 15%', }} className='text-muted'>There is one main difference between dry and wet riser systems, in that one contains water at all times, whereas the other is an empty system that can be flooded with water when necessary. Wet risers are only installed in buildings over 50 meters tall. </p>
            </div>
            <div className="pt-5">
                <Anniversary />

            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>Find out more about Wet and Dry Riser services by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
        </>
    )
}

export default WetAndDryRisers