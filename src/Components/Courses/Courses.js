import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="courses">
            <h2>Avalaible courses: {courses.length}</h2>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;