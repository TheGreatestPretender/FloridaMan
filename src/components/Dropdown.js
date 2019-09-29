import React, { useState } from 'react';
import { Menu, Button, MenuItem } from '@material-ui/core';


export const Dropdown = () => {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClose = () => {
        setShowDropdown(!showDropdown);
    }
 
    return (
        <div className="dropDown">
            <Button aria-controls="simple-menu" onClick={(handleClose)} aria-haspopup="true" size='medium'>
            theres a menu here POGCHAMP
                <Menu 
                    showDropdown={showDropdown} 
                    keepMounted 
                    open={Boolean(showDropdown)} 
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}> Aquarius </MenuItem>
                    <MenuItem onClick={handleClose}> Pisces </MenuItem>
                    <MenuItem onClick={handleClose}> Aries </MenuItem>
                    <MenuItem onClick={handleClose}> Taurus </MenuItem>
                    <MenuItem onClick={handleClose}> Gemini </MenuItem>
                    <MenuItem onClick={handleClose}> Cancer </MenuItem>
                    <MenuItem onClick={handleClose}> Leo </MenuItem>
                    <MenuItem onClick={handleClose}> Virgo </MenuItem>
                    <MenuItem onClick={handleClose}> Libra </MenuItem>
                    <MenuItem onClick={handleClose}> Scorpio </MenuItem>
                    <MenuItem onClick={handleClose}> Sagittarius </MenuItem>
                    <MenuItem onClick={handleClose}> Capricorn </MenuItem>

                </Menu>
            </Button>
                       
        </div>
    );
}