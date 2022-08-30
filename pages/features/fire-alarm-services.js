import React from 'react'
import Anniversary from '../../components/Anniversary'
import Featurebox from '../../components/Featurebox'
import styles from './Feature.module.css'
const FireAlarmServices = () => {
  return (
    <>
      <div className={`container ${styles.mainContainer} `}>
        <div className={`${styles.left}  d-flex flex-column gap-3 px-3`}>
          <h3 className={styles.pHeading}>Fire Alarm Servicing, <br /> Installation, Design & <br /> Maintenance </h3>
          <p className={styles.smallpara}>In order to ensure fire safety, fire alarms must be maintained. Preventing fire is the most important aspect of fire protection. The automatic fire detection system you choose should, however, enable you to detect and manage a fire as soon as it breaks out at your premises, in order to help you manage the developing emergency situation as soon as possible. As a result, people may be able to evacuate your premises safely. </p>
          <p className={styles.smallpara}>To comply with current legal requirements, fire detection systems and devices need to be routinely serviced and maintained by a competent company. For fire alarms to be effective in saving lives and property, they must be maintained regularly. Maintaining systems regularly will ensure they operate correctly and can prevent costly repairs in the future. Our engineers have extensive experience installing and maintaining fire alarm systems. </p>
        </div>
        <div className="right w-100 d-flex justify-content-center align-items-center ">
          <img src='/Images/Features/Fire Alaram servicing 1.png' alt="Fire Alarm Servicing" className='img-fluid' style={{ width: '30%' }} />
        </div>
      </div>

      <div className="pt-5">
        <Featurebox secHeading="" pHeading="Our Maintenance Programme" paras={['FIA/FPA-certified and FIA/FPA-trained, Red Fire Safety provides a reliable, timely and friendly service for every job without compromising on quality. You can also take advantage of additional services, like weekly fire alarm testing, while receiving a free no-obligation consultation.', 'Every one of our maintenance packages is custom-designed to suit your business or property needs; we will listen to your requirements and provide you with industry-leading service, unparalleled by any other. ']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
      </div>

      <div className="pt-5">
        <Featurebox secHeading="" reverse={true} pHeading="Out of Hours " paras={['Our maintenance contracts provide an out-of-hours callout service that operates 365 days a year, 24 hours a day. With the help of our helpful and experienced engineers, you will always have access to emergency repairs, support or advice whenever you need it.', '']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
      </div>

      <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
        <p style={{ fontSize: '14px' }}>Find out more about the preventative maintenance servicing and call out services we provide by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
      </div>

      <div className="pt-5">
        <Anniversary />

      </div>


    </>
  )
}

export default FireAlarmServices