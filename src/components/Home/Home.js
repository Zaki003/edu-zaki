import { Box } from '@mui/system';
import React from 'react';
import Courses from '../Courses/Courses';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Box className="home">
                <h1 id='headline'>Learn effectively, learn with fun!</h1>
                <p>Over 10000+ students are being guided by our top class teachers, join the community today!</p>
            </Box>
            <Courses></Courses>
        </div>

    );
};

export default Home;