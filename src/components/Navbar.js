import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import  MenuIcon from "@material-ui/icons/Menu";




const Navbar =()=>{
    return(
        <AppBar position="static" color="secondary">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon>

                    </MenuIcon>
                </IconButton>
                <Typography fontFamily='Roboto' variant = "h5">Live Score</Typography>
            </Toolbar>

        </AppBar>
    );
    
}

export default Navbar;