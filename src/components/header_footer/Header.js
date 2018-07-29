import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import SideDrawer from './SideDrawer'


class Header extends Component {

    state ={
        drawerOnpen:false,
        navShow: false
    }

    toggleDrawer = (value) =>{
        this.setState({
            drawerOnpen: value
        })
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () =>{
        if(window.scrollY > 0){
            this.setState({
                navShow:true
            })
        } else{ this.setState({
            navShow:false
        })}
    }
    render() {
        const style = {
          
        }
        const iconButtonStyle = {
            'ariaLabel':'Menu',
            color :'inherit'
        }
     
        return (
            <AppBar style = {{
                position: 'fixed',
               boxShadow:'none',
                padding: '10px 0px',
                backgroundColor: this.state.navShow ? '#2f2f2f' : 'transparent'

            }}>
            
                <ToolBar>
                <div className ='header_logo'>
                 <div className='font_righteous header_logo_venue'> The Venue</div>
                 <div className='header_logo_title'>Musical Events</div>
                </div>

                <IconButton
                style ={iconButtonStyle}
                onClick={() =>{this.toggleDrawer(true)}}
                >
                   <MenuIcon />
                </IconButton>


                <SideDrawer
                open={this.state.drawerOnpen}
                onClose={(value) => this.toggleDrawer(value)}
                >    </SideDrawer>
                </ToolBar>
        
            
            </AppBar>
        );
    }
}

export default Header;