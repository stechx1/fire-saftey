import React from 'react'
import styles from '../styles/FeatureBox.module.css'
const Featurebox = ({ secHeading, pHeading, paras, image, reverse, points }) => {
  return (
    <>
      <div className={`container ${reverse ? 'flex-row-reverse' : ''} ${styles.mainContainer} `}>
        <div className="left w-75 d-flex flex-column gap-3 px-3">
          {pHeading !== '' && <h1 className={styles.pHeading}>{pHeading}</h1>}
          {secHeading !== '' && <h3 className={styles.secHeading}>{secHeading}</h3>}
          {paras.map((para, index) => <p key={index} style={{ fontSize: "smaller" }}>{para}</p>)}
          {points.length !== 0 && <>
            <div className='d-flex flex-column gap-2'>
              {points.map((point, index) => <span key={index} > <i className="fa fa-check-circle me-2" aria-hidden="true"></i>
                {point} </span>)}
            </div>
          </>
          }
        </div>
        <div className="right w-75 ">
          <img src={image} alt="frame" className='img-fluid' />
        </div>
      </div>
    </>
  )
}

export default Featurebox