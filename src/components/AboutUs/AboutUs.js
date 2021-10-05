import React from 'react';
import useCourses from '../../hooks/useCourses';
import './AboutUs.css';

const AboutUs = () => {
    const [courses] = useCourses();
    return (
        <div className='about-us'>
            <h1>Welcome to Edu-Zaki!</h1>
            <h2>Welcome to a wonderful learning environment</h2>
            <div>
                <h3>Our Teachers: </h3>
                {
                    courses.map(course => <h4>{course.teacher}</h4>)
                }
            </div>
        </div>
    );
};

export default AboutUs;