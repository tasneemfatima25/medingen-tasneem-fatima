import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Rating.css';

const Rating = () => {
    const [userRating, setUserRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [avgRating, setAvgRating] = useState(null);
    const [allReviews, setAllReviews] = useState([]);

    const handleSubmit = async () => {
        if (!userRating || !reviewText.trim()) return toast.error('Please enter rating and review');
        await fetch('http://localhost:5000/api/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({ rating: userRating, review: reviewText }),
        });
        toast.success("Submit Review")
        setUserRating(0);
        setReviewText('');
        fetchRatings();
    };

    const fetchRatings = async () => {
        const res = await fetch('http://localhost:5000/api/rating');
        const data = await res.json();
        setAvgRating(data.avgRating.toFixed(1));
        setAllReviews(data.reviews);
    };

    useEffect(() => {
        fetchRatings();
    }, []);

    return (
        <div className="rating-container">
            <ToastContainer position="top-right" autoClose={3000} />
            <h3>Rate & Review</h3>

            <div className="starss">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span
                        key={i}
                        onClick={() => setUserRating(i)}
                        className={userRating >= i ? 'star active' : 'starr'}
                    >
                        ★
                    </span>
                ))}
            </div>

            <textarea
                rows="3"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />

            <button className='buttonSubmit' onClick={handleSubmit}>Submit</button>

            {avgRating && <p className="avg">Average Rating: {avgRating} / 5</p>}

            <h4>All Reviews:</h4>
            <ul className="reviews-list">
                {allReviews.map((r, i) => (
                    <li key={i} className="review-item">
                        <div className="stars-with-rating">
                            {[1, 2, 3, 4, 5].map((starIndex) => (
                                <span
                                    key={starIndex}
                                    className={r.rating >= starIndex ? 'star active' : 'starr'}
                                >
                                    ★
                                </span>
                            ))}
                            <span className="review-score">{r.rating.toFixed(1)}</span>
                        </div>
                        <p className="review-text">“ {r.review} ”</p>
                        <p className="review-text">“ {r.review} ”</p>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Rating;
