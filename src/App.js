import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from'./components/featured/index'
import VenuInfo from './components/venuinfo/VenuInfo'

class App extends Component {
  render() {
    const style = {
      height:'1500px',
      backgroundColor: 'red'
    }
    return (
      <div className="App" style={style}>
       <Header/>
       <Featured/>
       <VenuInfo/>
      </div>
    );
  }
}

export default App;
