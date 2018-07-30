import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'

class Countdown extends Component {
    state ={
        deadline: 'nov, 20, 2018',
        days: '0',
        hours:'0',
        min:'0',
        sec:'0',
    }
    getRemaining(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date())
        if(time < 0){
            console.log('date passed')
        } else{
            const sec = Math.floor((time/1000)%60)
            const min = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60)%24))
            const days = Math.floor(time/(1000*60*60*24))
            
            this.setState({
                days,
                hours,
                min,
                sec
            })
        }
    }
    componentDidMount(){
        setInterval(()=>this.getRemaining(this.state.deadline),1000)
    }
    
    render() {
        return (
            <Slide left delay={1500}>
            <div className="countdown_wrapper">
            <div className="countdown_top">
            Event starts in
            </div>
            <div className="countdown_bottom">
            <div className="countdown_item">
                <div className="countdown_time">
               {this.state.days}
            </div>
            <div className="countdown_tag">
                 Days
            </div>
            
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.hours}
            </div>
            <div className="countdown_tag">
                 hs
            </div>
            
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.min}
            </div>
            <div className="countdown_tag">
                 min
            </div>
            
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.sec}
            </div>
            <div className="countdown_tag">
                 sec
            </div>
            
            </div>
          
            </div>
                
            </div>
            </Slide>
            
        );
    }
}

export default Countdown;