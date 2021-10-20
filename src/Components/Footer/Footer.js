import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div >

            <div class="row footer-container">
                <div class="column">
                    <h1>Our Insurance Service is available now</h1>
                    <p>
                        The Sanjeevani health insurance comes with extensive coverage. The plan covers a wide range of medical expenses, including hospitalization expenses, day care treatments, AYUSH treatment, ambulance charges and cataract surgery. It also covers the cost of dental treatment and plastic surgery.</p>
                </div>

                <div class="column">
                    <h1>In Emergency we provide</h1>
                    <ul>Free diagnostic</ul>
                    <ul>Free ambulance service</ul>
                    <ul>Free Oxygen</ul>

                </div>
                <div class="column">
                    <h1>Contact Us</h1>
                    <p>Phone: +12345</p>
                    <p>Email: admin@sanjeevani.com</p>
                    <p>Location: Dhanmondi,Dhaka</p>
                </div>
            </div>
        </div >


    );
};

export default Footer;