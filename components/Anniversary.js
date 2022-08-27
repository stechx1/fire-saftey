import React from 'react'
import Featurebox from './Featurebox'

const Anniversary = () => {
  return (
    <>
        <div className="container mt-5">
            <h1 className='text-center fw-bold fs-2' >How Old Are We ? </h1>
            <Featurebox points={[]} secHeading="" paras={['Red Fire Safety are pleased to announce its 18th year of successful trading and would like to thank all clients both old and new for their continued support over the years.  ', 'Formed in 2004 the business has evolved and grown into a leading provider of Fire Services.', 'Red Fire Safety now successfully operates across London, Buckinghamshire , Surrey, Berkshire, Essex and Hertfordshire. We also cover other counties such as Bedfordshire, Cambridgeshire, Oxfordshire, East Sussex and West Sussex. We can also deliver projects across the UK. ', "Over the 18 years we've been in operating we've grown in knowledge and expertise focusing on supporting businesses in the commercial and residential sectors with compliance through planned maintenance projects in a friendly yet efficient manner  "]} image="/Images/anniversary.png" />
        </div>
    </>
  )
}

export default Anniversary