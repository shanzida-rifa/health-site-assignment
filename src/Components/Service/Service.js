import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'


const Service = (props) => {
    const { id, name, price, time, picture } = props.service;
    const serviceStyle = {
        border: '3px solid seagreen',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/service/${id}`;
    return (
        <div style={serviceStyle} className="service">
            <img src={picture} alt="" />
            <h2> {name}</h2>
            <h3>Consultation Time: {time}</h3>
            <h5>Cost: {price} $</h5>
            <br />
            <button className="btn"> <Link className="link" to={url}>Make An Appointment</Link></button>
        </div>
    );
};

export default Service;