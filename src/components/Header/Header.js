import { Box } from '@mui/system';
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box className='header'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Box id='company'>
                    <img src={logo} alt="" />
                    <h2 id='company-name'>Edu-Zaki</h2>
                </Box>
                <Box className='links'>
                    <nav className='menu'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/courses'>Courses</NavLink>
                        <NavLink to='/pages'>Pages</NavLink>
                    </nav>
                </Box>

            </Grid>

        </Box>
    );
};

export default Header;