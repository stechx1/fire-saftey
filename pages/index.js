import Head from 'next/head'
import Image from 'next/image'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.primaryHeading}>Fire Safety Services, <br /> Consultancy, Training & <br /> Assessment </h1>
        <span>Your saftey is our business</span>
        <button className={styles.primaryButton}>View Our Services</button>
      </div>

      <Featurebox points={[]} secHeading="Nothing Is more important than the health and safety of our clients and their customers" paras={['Red Fire Safety is an established service partner, consultancy, and training provider helping a variety of organizations ensure they stay compliant with fire safety legislation', 'We help to provide safe working or living environments for our clients, which is a commitment shared by all Red Fire Staff.']} image="/Images/FeatureBox/Frame 3.png" />

      <div className="container pt-5">
        <h1 className='text-center fw-bold fs-2'>Featuers</h1>
        {/* <div className='container my-5'>
          <div className="row">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img src="/Images/Features/Fire assessment 1.png" alt="Fire1" className='img-fluid' width={50} height={50} />
              <span className={styles.FeaturesHeading}>Fire Door Inspection & Maintenance</span>
              <a className={styles.FeaturesLink}> Find out more</a>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img src="/Images/Features/Fire assessment 1.png" alt="Fire1" className='img-fluid' width={50} height={50} />
              <span className={styles.FeaturesHeading}>Fire Door Inspection & Maintenance</span>
              <a className={styles.FeaturesLink}> Find out more</a>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img src="/Images/Features/Fire assessment 1.png" alt="Fire1" className='img-fluid' width={50} height={50} />
              <span className={styles.FeaturesHeading}>Fire Door Inspection & Maintenance</span>
              <a className={styles.FeaturesLink}> Find out more</a>
            </div>
          </div>
        </div> */}
        <div className=' d-flex justify-content-between  py-5'>
          <div className="d-flex flex-column align-items-center text-center gap-3 px-5">
            <img src="/Images/Features/Fire assessment 1.png" alt="Fire1" className='img-fluid' width={60} height={90} />
            <span className={styles.FeaturesHeading}>Fire Door Inspection & <br /> Maintenance</span>
            <a className={styles.FeaturesLink} onClick={()=>{router.push('/features/fire-door-inspection')}}> Find out more</a>
          </div>
          <div className="d-flex flex-column align-items-center text-center gap-3 px-5">
            <img src="/Images/Features/Fire Alaram servicing 1.png" alt="Fire1" className='img-fluid' width={90} height={90} />
            <span className={styles.FeaturesHeading}>Fire Alarm Servicing, <br /> Installation, Design & <br /> Maintenance</span>
            <a onClick={()=>{router.push('/features/fire-alarm-services')}} className={styles.FeaturesLink}> Find out more</a>
          </div>
          <div className="d-flex flex-column align-items-center text-center gap-3 px-5">
            <img src="/Images/Features/Fire Extinguisher 1.png" alt="Fire1" className='img-fluid' width={50} height={50} />
            <span className={styles.FeaturesHeading}>Fire Extinguisher <br /> Servicing & <br /> Maintenance</span>
            <a className={styles.FeaturesLink} onClick={()=>{router.push('/features/fire-extinguisher-services')}}> Find out more</a>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <h1 className='text-center fw-bold fs-2' >Why Choose Red Fire Safety?</h1>
        <Featurebox points={[]} secHeading="" paras={['Red Fire Safety is an independent company based in London. Our business is based on a shared belief that long-term solutions are more important than short-term conveniences. Over time, we believe these qualities have earned Red Fire Safety a reputation for reliability, honesty, and integrity.', 'To protect homes and businesses from fire, we do our utmost to understand our customers and provide them with a bespoke, friendly service. By providing sensible advice and practical fire safety solutions, we help clients meet their legal fire safety requirements, reduce fire risks, and protect people.']} image="/Images/FeatureBox/Rectangle 2.png" />
      </div>

      <div className="pt-5">
       <Anniversary/>
      </div>
    </>
  )
}
