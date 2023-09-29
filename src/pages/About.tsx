import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column"}}>
      <h2 style={{padding: 10}}>About Me</h2>
      <p style={{padding: 10}}>
        Write a brief introduction about yourself and your skills here. You can
        mention your education, experience, and interests.
      </p>
    </section>
  );
};

export default About;
