import React from 'react';
import './styles/aboutUs.css';

const About = () => (
  <section id="about" className="about">
    <div className='borderclass'>
    <h2>About Us</h2>
    <p>Beyond Career is a visionary startup founded by a team of dynamic and passionate students from IIT Kharagpur, committed to redefining how students approach their careers. Our mission is to be a one-stop solution for students, helping them unlock opportunities, connect with industry leaders, and achieve their aspirations. At Beyond Career, we believe that every student deserves access to meaningful guidance, hands-on experience, and resources that empower them to go beyond their dreams. Whether it’s internships, career mentorship, or community engagement, we’re here to bridge the gap between ambition and success. 
    </p>
    </div><br></br><br></br>
   <div className="aboutus">
      <div>
        <h3>Mission</h3>
        <p>To help individuals find their purpose and potential while assisting organizations in becoming attractive employers.
          Offer mentorship programs and workshops tailored to help individuals develop skills, gain practical experience, and make informed career decisions.</p>
      </div>
      <div>
        <h3>Vision</h3>
        <p>To empower young individuals in their formative career development journey and offering personalised support
          Beyond Careers aims to help individuals position themselves as "Employers of Choice" by enhancing their employee experience and fostering a positive work environment.  </p>
      </div>
      <div>
        <h3>Core Values</h3>
        <p><ul>
          <li>Empowerment</li>
           <li>Inovation</li>
            <li>Integrity</li>
             <li>Inclusivity</li></ul></p>
      </div>
    </div>
  </section>
);

export default About;
