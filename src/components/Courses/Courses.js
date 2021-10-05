import { Grid } from '@mui/material';
import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                    courses.map(course =>
                        <Grid item xs={2} sm={4} md={4}>
                            <Course course={course} key={course.id}></Course>
                        </Grid>)
                }


            </Grid>
        </div >
    );
};

export default Courses;