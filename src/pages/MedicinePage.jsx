import React, { useEffect, useState } from 'react';
import MedicineDetails from '../components/MedicineDetails';
import GenericAlternative from '../components/GenericAlternative';
import '../styles/MedicinePage.css';
import Loader from '../components/Loader';

const MedicinePage = () => {
  const [alternatives, setAlternatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlternatives = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/generics');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAlternatives(data);  
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAlternatives();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="medicine-page">
        <div className="left-section">
          <h3>&larr; Paracetamol/acetaminophen</h3>
          <div className="tab">Medicine Details</div>
          <MedicineDetails />
        </div>
        <div className="right-section">
          <h3>Generic Medicine Alternatives</h3>
          {alternatives.length > 0 ? (
            alternatives.map((item, index) => (
              <GenericAlternative
                key={index}
                name={item.name}
                brand={item.brand}
                price={item.price}
                mrp={item.mrp}
              />
            ))
          ) : (
            <p>No alternatives available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MedicinePage;
