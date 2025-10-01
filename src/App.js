
import React, { Component } from 'react'


import Navbar from './camponet/Navbar';

import News from './camponet/News';
import Apikey from './camponet/Apikey';




export default class App extends Component {
   
  render() {

   const bodystyle = {
      backgroundColor: '#f38c8cff',
      color: '#f5f5f5',
      fontFamily: 'Verdana',
      padding: '20px',
      margin: '0'
    }


    return (
      <div >
        <div style={ bodystyle} >
       < Navbar/>
       <News/>
       </div>
      </div>
    )
  }
}



