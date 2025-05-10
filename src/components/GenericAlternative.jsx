import React from 'react';
import medicine from "../assets/images/medicine.png";

const GenericAlternative = ({ name, brand, price, mrp }) => {
  return (
    <div className="alternative-card">
      <img src={medicine} alt="Medicine" />
      <div className="info">
        <h4>{name}</h4>
        <p className='para'>{brand}</p>
        <p className='para'>Paracetamol 650</p>
        <p>
          <span className="mrp">₹{mrp}</span>{" "}
          <strong className="price">₹{price}</strong>
          <span className="discount">75% less Price</span>
        </p>
      </div>
      <div className="btn-container">
        <button className="add-btn">+ Add</button>
      </div>
    </div>
  );
};

export default GenericAlternative;
