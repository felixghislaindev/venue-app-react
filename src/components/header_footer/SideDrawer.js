import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List  from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {
    return (
        <Drawer
        anchor='right'
        open={props.open}
        onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => console.log(1)}>
                Events Starts In
                </ListItem>
                <ListItem button onClick={() => console.log(1)}>
                Venue Info
                </ListItem>
                <ListItem button onClick={() => console.log(1)}>
               Highlight
                </ListItem>
                <ListItem button onClick={() => console.log(1)}>
               Pricing
                </ListItem>
                <ListItem button onClick={() => console.log(1)}>
                Location
                </ListItem>
            </List>
        
        </Drawer>
    );
};

export default SideDrawer;