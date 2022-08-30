import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import headingStyles from '../pages/features/Feature.module.css'

const FireRiskAssessments = () => {
    return (
        <>
            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>

                <h3 className={headingStyles.pHeading}>Fire Risk Assessments</h3>
                <p className={headingStyles.smallpara}>Health and safety management revolves around assessing and mitigating fire risks while also safeguarding your employees and business. </p>
                <p className={headingStyles.smallpara}>A fire risk assessment can be performed by Red Fire Safety on buildings of any size or complexity and reasoned judgments can be made about the level of risk involved. A comprehensive fire risk assessment is documented in full, including full descriptions, associated photographs, and recommendations for action.  </p>
                <p className={headingStyles.smallpara}>In cases where non-compliances are raised, we can provide cost-effective solutions if changes are required.</p>
                <p className={headingStyles.smallpara}>According to the Regulatory Reform (Fire Safety) Order 2005, &apos;the responsible person&apos; has a legal duty to take all reasonable steps to make sure that fire safety levels are appropriate at all times. The segment of the legislation focusing on fire risk assessments begins as follows:</p>

            </div>

            <div className=' pt-5 container ' style={{ paddingRight: '15%', fontSize: '14px' }}>
                <h1 className={headingStyles.secHeading}>Risk Assessment. </h1>
                <p className={headingStyles.smallpara}>9.—(1) The responsible person must make a suitable and sufficient assessment of the risks to which relevant persons are exposed for the purpose of identifying the general fire precautions he needs to take to comply with the requirements and prohibitions imposed on him by or under this Order.  </p>
                <p className={headingStyles.smallpara}>This legislation applies to all non-domestic properties including commercial and public premises, such as shops, factories, warehouses and offices, but also schools, nursing homes as well as businesses providing sleeping accommodation. It also applies to sheltered housing as well as the communal areas of blocks of flats and houses in multiple occupation (HMOs); though not to the individual dwellings within the HMO.</p>
                <p className={headingStyles.smallpara}>For businesses employing five or more employees, there is a legal requirement to not only carry out a fire risk assessment, but to document the findings in writing. Fire Risk Assessments can be carried out by the organisation or business affected. There are official fire risk assessment help guides available and FRA forms can be downloaded for free from a number of sources. </p>
                <p className={headingStyles.smallpara}>However, if you have doubts as to your ability to carry out an FRA it is highly recommended to engage the services of a professional fire risk assessor to ensure you comply with all relevant regulations. </p>
                <p className={headingStyles.smallpara}>Areas that need to be considered in almost all fire risk assessments are fire detection systems, emergency exits and routes (including evacuation plans), firefighting equipment and the availability of information and advice to the building’s occupants.</p> 
                <p className={headingStyles.smallpara}>Issues such as the specific needs of vulnerable people and the safe storage of any dangerous substances must also be considered. However, these may not always be a relevant factor for the fire risk assessment depending on the use of the building.</p> 
                <p className={headingStyles.smallpara}>It is important to note that any changes in occupancy or activities within premises must be reflected in the fire risk assessment. This means the document should be reviewed regularly and updated if necessary.</p> 
            </div>

            <div className={` pt-5 d-flex flex-column gap-3 ${headingStyles.support} `}>
                <h1 className={headingStyles.secHeading}>Review and update your fire risk assessment </h1>
                <span className={headingStyles.smallpara}>In the event of significant changes within the workplace  premises, the fire risk assessment must be reviewed and updated at planned intervals. </span>
            </div>
            <div className="pt-5">
                <Featurebox secHeading="Why should you choose Red Fire Safety for your Fire Risk Assessment? :" pHeading="" paras={[]} points={['Fixed Fee, no hidden add ons', 'Fully Qualified Experienced Assessors - We Have Ex-Fire Officers On Our Team', 'PAS79 Methodology - Full Report Supplied', 'Annual & Review Inspection Service', 'Roof Void Risk Assessment Service']} image="/Images/FeatureBox/Rectangle 2.png" />
            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '15px', fontWeight:'bold' }}>Free Advice, Survey & Quotations for all  Fire Safety Solutions. </p>
                <p style={{ fontSize: '14px' }}>To find out more about our Fire Risk Assessments give us a call on   <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
            </div>
            <div className="pt-5">
                <Anniversary />

            </div>
        </>
    )
}

export default FireRiskAssessments