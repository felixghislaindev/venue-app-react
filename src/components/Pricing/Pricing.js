import React, { Component } from 'react';
import Button from'../utils/myButton'
import Zoom from 'react-reveal/Zoom'
class Pricing extends Component {
state ={
    price:[50,75,150],
    positions:['1st row ','Aisle seat','VIP club'],
    desc:['If your tickets includes any of the attributes or disclosures listed above, be sure to check the corresponding boxes while listing your tickets for sale.',
          'If your tickets includes any of the attributes or disclosures listed above, be sure to check the corresponding boxes while listing your tickets for sale.',
          'If your tickets includes any of the attributes or disclosures listed above, be sure to check the corresponding boxes while listing your tickets for sale.'],
          linkto:['https://www.timeout.com/london/music/south-west-four-1',
                  'https://www.timeout.com/london/music/south-west-four-1',
                   'https://www.timeout.com/london/music/south-west-four-1'],

        delay:[0,500,600]
}
showPricing = () => (
    this.state.price.map((Box,i) =>(
        <Zoom key={i} delay={this.state.delay[i]}>
        <div className='pricing_item'>
        <div className='pricing_inner_wrapper'>
        <div className='pricing_title'>
        <span>${this.state.price[i]}</span><span>{this.state.positions[i]}</span>
        </div>

        <div className='pricing_description'>
        <p>{this.state.desc[i]}</p>
        </div>

        <div className='pricing_buttonts'>
        <Button
        text='Purchase ticket'
        color='white'
        backgr='red'
        link={this.state.linkto[i]}
        />
        </div>
        </div>
        </div>
        </Zoom>
    
    ))
)


    render() {
        return (
            <div className='bck_black'>
               <div className='center_wrapper pricing_section'>

               <h2>Pricing</h2>
               <div className='pricing_wrapper'>
                {this.showPricing()}
               </div>
               </div> 
            </div>
        );
    }
}

export default Pricing;