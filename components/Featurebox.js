import React from 'react'
import styles from '../styles/FeatureBox.module.css'
const Featurebox = ({ secHeading, pHeading, paras, image, reverse, points, video }) => {
  return (
    <>
      <div className={`container ${reverse && 'flex-xl-row-reverse flex-xxl-row-reverse'} ${styles.mainContainer} `}>
        <div className={`${styles.left} ${points.length !== 0 ? styles.full : styles.half} d-flex flex-column gap-3 px-3`}>
          {pHeading !== '' && <h1 className={styles.pHeading}>{pHeading}</h1>}
          {secHeading !== '' && <h3 className={styles.secHeading}>{secHeading}</h3>}
          {paras[0] !== '' && paras.map((para, index) => <p key={index} style={{ fontSize: "smaller" }}>{para}</p>)}
          {points.length !== 0 && <>
            <div className='d-flex flex-column gap-1'>
              {points.map((point, index) => <span style={{ fontSize: "smaller" }} key={index} > <i style={{fontSize:'14px'}} className="fa fa-check-circle me-2" aria-hidden="true"></i>
                {point} </span>)}
            </div>
          </>
          }
        </div>
        <div className={` ${styles.right} ${points.length !== 0 ? styles.half : styles.full} `}>
          {image !== '' ? <img src={image} alt="frame" className='img-fluid' /> : <video src={video} autoPlay loop className='img-fluid'>
      </video>}
        </div>
      </div>

      
    </>
  )
}

export default Featurebox