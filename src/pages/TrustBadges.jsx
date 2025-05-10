import React from 'react'
import Payment from "../assets/images/payment.png"
import authentic from "../assets/images/authentic.png"
import happyCustomer from "../assets/images/happy.png"
import "../styles/TrustBadges.css"

function TrustBadges() {
  return (
    <div className="trust-badges-container">
      <h1 className='heading'>Disclaimer:</h1>
      <p className='paragraph'>
        The contents here is for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.
      </p>
      <div className="trust-badges">
        <div className="badge">
          <img src={Payment} alt="Payment" />
          <p>Safe and Secured<br />Payment</p>
        </div>
        <div className="badge">
          <img src={authentic} alt="Authentic" />
          <p>100% Authentic<br />Products</p>
        </div>
        <div className="badge">
          <img src={happyCustomer} alt="Happy Customers" />
          <p>6 lac + Happy<br />Customers</p>
        </div>
      </div>
    </div>
  );
}


export default TrustBadges