import React from "react";
import './About.css';
import aboutPic from '../../Assets/images/aboutPic.png';

const About = () => {
  return (
    <div className="about">
      <div className="image-item">
        <img src={aboutPic} alt="Jane Doe" />
      </div>
      <div className="text-item">
        <h2>Hello! I'm Rakesh, a dedicated web developer with a passion for creating dynamic and user-friendly websites.</h2>
        <p>
          I hold a degree in Computer Science from ABC University, where I first discovered my love for coding. During my studies, I developed a keen interest in web development, which led me to pursue this field professionally.
        </p>
        <p>
          Over the past five years, I've worked with various companies, including XYZ Corp and Tech Innovations, where I contributed to numerous projects, from small business websites to large e-commerce platforms. My expertise includes HTML, CSS, JavaScript, and frameworks like React and Angular.
        </p>
        <p>
          I believe in the power of clean, efficient code and am driven by the desire to create seamless user experiences. I approach every project with a collaborative spirit, always ready to learn and adapt to new challenges.
        </p>
        <p>
          When I'm not coding, you can find me exploring the great outdoors, experimenting with new recipes in the kitchen, or working on personal programming projects to expand my skills.
        </p>
        <p>
          I'm always eager to take on new challenges and collaborate with others who share my passion for web development. Feel free to reach out if you'd like to discuss a project or just connect!
        </p>
      </div>
    </div>
  );
};

export default About;
