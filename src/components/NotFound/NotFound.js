import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => {
    return (
        <Box sx={{ width: 500, mx: 'auto' }}>
            <h1 >Page Not Found</h1>
            <NavLink to='/home' activeClassName="selected" >
                <Button variant='contained' color='error' size='medium'>Back to home</Button>
            </NavLink>
        </Box>
    );
};

export default NotFound;