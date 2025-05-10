import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader'; 

const MedicineDetails = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/add-medicine', {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });

        if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
          const data = await response.json();
          setMedicines(data.data);
          console.log(data.data);
        } else {
          const textResponse = await response.text();
          setError('Error: ' + textResponse);
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to load data: ' + err.message);
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  if (loading) return <Loader />; 
  if (error) return <div>{error}</div>;

  return (
    <div className="medicine-details">
      {medicines.map((medicine) => (
        <div key={medicine._id}>
          <h2>About {medicine.name}</h2>
          <p>{medicine.description}</p>

          <h3>Uses of {medicine.name}</h3>
          <ul>
            {Array.isArray(medicine.uses) && medicine.uses.length > 0 ? (
              medicine.uses.map((use, index) => <li key={index}>{use}</li>)
            ) : (
              <li>No uses available</li>
            )}
          </ul>

          <h3>How {medicine.name} Works</h3>
          <ul>
            {Array.isArray(medicine.dosage) && medicine.dosage.length > 0 ? (
              medicine.dosage.map((dose, index) => <li key={index}>{dose}</li>)
            ) : (
              <li>No dosage information available</li>
            )}
          </ul>

          <h3>Side Effects Of {medicine.name}</h3>
          <div className="SideEffect">Common Side Effects</div>
          <ul>
            {Array.isArray(medicine.sideEffects) && medicine.sideEffects.length > 0 ? (
              medicine.sideEffects.map((effect, index) => <li key={index}>{effect}</li>)
            ) : (
              <li>No side effects listed</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MedicineDetails;
