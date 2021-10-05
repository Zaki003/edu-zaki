import { Avatar, Card, CardContent, CardHeader, cardHeaderClasses, CardMedia, Container, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Course = (props) => {
    const { grade, id, img, description, teacher, price } = props.course;
    const title = `Courses for grade ${grade}`;
    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader

                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Students"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Price: $ {price} per pupil <br />
                        Teacher's Name: {teacher}.
                    </Typography>
                </CardContent>
            </Card>
        </Container>

    );
};

export default Course;