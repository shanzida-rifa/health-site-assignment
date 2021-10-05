import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const { id, name, price, duration, picture } = props.course;
    const courseStyle = {
        border: '3px solid seagreen',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/course/${id}`;
    return (
        <div style={courseStyle} className="course">
            <img src={picture} alt="" />
            <h2>This is : {name} {id}</h2>
            <h3>Duration: {duration}</h3>
            <h5>Price: {price} $</h5>
            <br />
            <button className="btn"> <Link to={url}>Buy Now</Link></button>
        </div>
    );
};

export default Course;