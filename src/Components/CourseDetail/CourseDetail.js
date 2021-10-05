import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetail = () => {
    const { friendId: courseId } = useParams();
    const [course, setCourse] = useState({})
    useEffect(() => {
        const url = `../../../public/courses.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <div>
            <h3>Course detail of {courseId}</h3>
            <h1>{course.name}</h1>

        </div>
    );
};

export default CourseDetail;