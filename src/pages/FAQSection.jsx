import React, { useEffect, useState } from 'react';
import '../styles/FAQSection.css';
import Loader from '../components/Loader'
const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/faqs')
      .then((response) => response.json())
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching FAQs:', error);
        setLoading(false);
      });
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading) return <Loader />;

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions for Paracetamol</h2>
      </div>
      <div className="faq-box">
        <h3>Paracetamol</h3>
        {faqs.length > 0 ? (
          faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeIndex === i ? 'active' : ''}`}
              onClick={() => toggleAnswer(i)}
            >
              <p className="faq-question"><strong>Q. {faq.question}</strong></p>
              {activeIndex === i && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))
        ) : (
          <p>No FAQs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
