import React from 'react';
import {scroller} from 'react-scroll'
import Drawer from '@material-ui/core/Drawer'
import List  from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {

    const scrollToSection = (section) =>{
        scroller.scrollTo(section,{
            duration: 1500,
            delay:150,
            smooth:true,
            offset: -150
        })
        props.onClose(false)
    }

    return (
        <Drawer
        anchor='right'
        open={props.open}
        onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToSection('start')}>
                Events Starts In
                </ListItem>
                <ListItem button onClick={() => scrollToSection('venueInfo')}>
                Venue Info
                </ListItem>
                <ListItem button onClick={() => scrollToSection('highlight')}>
               Highlight
                </ListItem>
                <ListItem button onClick={() => scrollToSection('pricing')}>
               Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToSection('location')}>
                Location
                </ListItem>
            </List>
        
        </Drawer>
    );
};

export default SideDrawer;