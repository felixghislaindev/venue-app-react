import React, { Component } from 'react';
import './resources/styles.css'
import {Element} from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from'./components/featured/index'
import VenuInfo from './components/venuinfo/VenuInfo'
import Highlight from'./components/Highlights/Highlights'
import Pricing from './components/Pricing/Pricing'
import Location from './components/Location/Location'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
    const style = {
      height:'1500px',
      backgroundColor: 'red'
    }
    return (
      <div className="App" style={style}>

      <Header/>
      <Element name='start'>
      <Featured/>
      </Element>
      <Element name='venueInfo'>
      <VenuInfo/>
      </Element>
      <Element name='highlight'>
       <Highlight/>
       </Element>
      <Element name='pricing'>
      <Pricing/>
      </Element>
      <Element name='location'>
      <Location/>
      </Element>
       
      
       
      
       <Footer/>
      </div>
    );
  }
}

export default App;
