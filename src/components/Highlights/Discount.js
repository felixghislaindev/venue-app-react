import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Button from'../utils/myButton'

class Discount extends Component {

    state ={
        StartDiscount: 0,
        endDiscount: 35
    }
    percentage = () =>{
        if(this.state.StartDiscount < this.state.endDiscount){
            const newDiscount = this.state.StartDiscount + 1
            this.setState({
                StartDiscount: newDiscount
            })
        }

    }
    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30);
    }
    render() {
        return (
            <div className='center_wrapper'>
            <div className='discount_wrapper'>
            
            <Fade
            onReveal={() => this.percentage()}
            
            >
            <div className='discount_porcentage'>
            <span>{this.state.StartDiscount}%</span>
            <span>OFF</span>
            </div>
            </Fade>

            <Slide right>
            <div className='discount_description'>
            <h3>Hurry! Selling fast. Purchase the tickets before the 24 DECEMBER</h3>
            <p>Yes it’s freezing and yes we’re talking about music festivals. But Lovebox’s line-up this year, which has just been announced, is honestly enough to thaw a Mini Milk factory. Here’s everything you need to know:
            </p>
            <Button text='Buy tickets'
            color='white'
            backgr='red'
            link=''/>
            </div>
            </Slide>
          

            
            
            

            </div>
                
            </div>
        );
    }
}

export default Discount;