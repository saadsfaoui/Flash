import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Johnson",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "QuizMaster makes learning fun and easy!",
    },
    {
      name: "Liam Smith",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "A fantastic app for quiz lovers!",
    },
    {
      name: "Sophia Brown",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "The quizzes are challenging and engaging!",
    },
    {
      name: "James Lee",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 4,
      feedback: "Great features and easy to use!",
    },
    {
      name: "Olivia Green",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "I love creating quizzes with this app!",
    },
    {
      name: "Emma Johnson",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "QuizMaster makes learning fun and easy!",
    },
    {
      name: "Liam Smith",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "A fantastic app for quiz lovers!",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonials">
      <h2>Hear from our awesome users!</h2>
      <div className="testimonials-container">
        <div
          className="testimonial-cards"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="avatar"
              />
              <h3>{testimonial.name}</h3>
              <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevSlide} className="nav-btn" disabled={currentIndex === 0}>
          &lt; Prev
        </button>
        <button
          onClick={nextSlide}
          className="nav-btn"
          disabled={currentIndex >= testimonials.length - 3}
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
