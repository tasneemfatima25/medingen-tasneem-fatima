import React, { useEffect, useState } from 'react';
import MedicineCard from '../components/MedicineCard';
import Loader from '../components/Loader'; 
import '../styles/CompareMedicine.css';

const CompareMedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicines-card-info')
      .then((response) => response.json())
      .then((data) => {
        const filteredMedicines = data.map(medicine => ({
          title: medicine.title,
          brand: medicine.brand,
          generic: medicine.generic,
          avgPrice: medicine.avgPrice,
          price: medicine.price,
          discount: medicine.discount,
          formation: medicine.formation,
          rating: medicine.rating,
          review: medicine.review,
        }));
        setMedicines(filteredMedicines);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="compare-container">
      <h2>Compare Medicine</h2>
      <p className="subtext">Compare medicines' price composition to make your decision</p>

      <div className="card-grid">
        {loading ? (
          <Loader /> 
        ) : medicines.length > 0 ? (
          medicines.map((medicine, index) => (
            <MedicineCard
              key={index}
              title={medicine.title}
              brand={medicine.brand}
              generic={medicine.generic}
              avgPrice={medicine.avgPrice}
              price={medicine.price}
              discount={medicine.discount}
              formation={medicine.formation}
              rating={medicine.rating}
              review={medicine.review}
            />
          ))
        ) : (
          <p>No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default CompareMedicinePage;
