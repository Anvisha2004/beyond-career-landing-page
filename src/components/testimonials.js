import React from 'react';
import './styles/testimonials.css';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h2 className="gradient-text">Statistics</h2>

    <div className="stats">
      <div>
        <h3>1,200+</h3>
        <p>Internships Secured</p>
      </div>
      <div>
        <h3>95%</h3>
        <p>Positive Career Outcomes</p>
      </div>
      <div>
        <h3>80+</h3>
        <p>Mentors from Industry</p>
      </div>
    </div>
 <h2 className="gradient-text">Success Stories</h2>
    <div className="testimonial-grid">
      <blockquote>
        “Thanks to Beyond Career, I got my dream internship!”
        <span>– Aditi</span>
      </blockquote>
      <blockquote>
        “Mentorship helped me land a job in tech.”
        <span>– Rahul</span>
      </blockquote>
      <blockquote>
        “The community sessions boosted my confidence during interviews.”
        <span>– Snehal</span>
      </blockquote>
      <blockquote>
        “From confused to confident — this platform changed everything.”
        <span>– Shreyas</span>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;
