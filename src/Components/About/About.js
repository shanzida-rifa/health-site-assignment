import React from 'react';
import './About.css'
import img2 from './Write-Paragraph-A-Language-Club.jpg'

const About = () => {
    return (
        <div className="about">
            <img src={img2} alt="" />
            <h2>So what’s the big deal about business reviews and review sites? Well, more than 93% of consumers take online reviews into account when making their purchase decisions. Businesses are told to get more reviews on review websites to keep attracting new customers. And, as consumers, we are constantly being asked to leave a review for almost every transaction we complete</h2>
        </div>
    );
};

export default About;