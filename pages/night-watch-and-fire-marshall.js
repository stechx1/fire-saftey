import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from './features/Feature.module.css'

const NightWatch = () => {
  return (
    <>
      <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
        <h1 className={` ${headingStyles.pHeading} my-3`}>Night Watch & Fire Marshall Services </h1>
        <p >If you need a Fire Marshal for a night club, a product launch, or a 24 hour watch on a high rise, Red Fire Safety can help. Our Fire Marshal services have been utilized at a variety of large sporting events, TV studios, festivals, product launches, and even night clubs over the years. </p>
        <p >Some of our high profile events have included product launches in London&apos;s west end with indoor and  outdoor sporting events such as the London 2012 Olympics. </p>
        <p >Our Fire Marshals can be supplied in our standard branded workwear or we can ensure they are dressed formally and discreetly for high profile events. </p>
        <p >We pride ourselves on only supplying Fire Marshalls alongside serving Firefighters, which gives our clients that extra peace of mind. As professionals, our staff react calmly and proactively to highly stressful situations. They are experienced in evacuations, roll calls, and, of course, attempt to put out fires.  </p>
      </div>
      <div className="pt-2">
        <Featurebox secHeading="" pHeading="" paras={['Event fire marshals offer the following benefits:']} points={['A responsible person to ensure all escape routes and exits are clear. ', 'Ensuring all firefighting equipment and alarm systems are in working order. ', 'Identifying hazards and reporting findings to rectify the hazard during watch or as soon and practicably possible.  ', 'Dedicated responsible person to investigate any alarm actuation and initiate the evacuation of the premises if required. ', 'Will attempt to extinguish any fire situation if safe to do so. ', 'Carry out a roll call at the assembly point to ensure all persons are accounted for.  ', 'Main point of contact for the fire & emergency services.  ']} image="/Images/fire-marshall.jpeg" />
      </div>

      <div className={` pt-5 d-flex flex-column gap-3 ${headingStyles.support} `}>
        <h1 className='fw-bold fs-2'>What to Expect from Red Fire Safety</h1>
        <span className={headingStyles.smallpara}>We offer Fire Marshall and Fire Watch services for your business to ensure your business is adequately protected against fire risks. We can provide you with one or several dedicated officers to ensure your business is protected against fire risks. In order to properly perform fire watch and marshall duties, our fire watch officers are properly trained, highly experienced, and possess the necessary expertise. </span>
      </div>
      <div className="pt-5">
        <Anniversary />

      </div>
      <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
        <p style={{ fontSize: '14px' }}>Find out more about our Fire Marshall or Fire Watch Services by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
      </div>
    </>
  )
}

export default NightWatch