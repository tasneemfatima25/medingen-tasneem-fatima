import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const MedicineCard = ({ title, brand, generic, avgPrice, price, discount, formation, rating, review }) => {

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i} className="star filled" />);
    } else if (rating >= i + 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }
  return (
    <div className="medicine-card">
      <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/EB/AA/NM/138338908/paracetamol-tablet-500x500.jpg" alt="medicine" />
      <h1>{title}</h1>
      <div><p className="brand">By {brand}</p></div>
     

      <p className='genname'>Generic Name:<br /> <p className='generic'>{generic}</p></p>
      <p className='genname'>Average Price:<br /><p className='generic'> Rs {avgPrice}</p></p>

      <div className="price-box">
        <span className="discount">{discount}</span>
        <span className="price">Rs. {price}</span>
      </div>

      <hr className='devide'/>

      <p className='para'>Chemical formation<br /><span className="chem">{formation}</span></p>
      <p className='para'>Ratings & Review</p>

      <div className="rating">
        <div>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`star ${i < rating ? 'filled' : ''}`} />
            
          ))}
           
        </div>
      <span className="review-score">{rating}</span>


      </div>
      <span className="review">"{review}"</span>

      <div> <p className="review">"{review}"</p>  </div>


     
    </div>
  );
};

export default MedicineCard;
