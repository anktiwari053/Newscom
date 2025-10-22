  import React, { Component } from 'react'
 
import LoadingBar from "react-top-loading-bar";
 
 
 
 export default class Loading extends Component {

 pageSize = 5;
 state = {
  progress:0
 }
  setProgress = (progress) => {
  this.setState({progress:progress})

 }


   render() {
     return (
       <div>
             

             <LoadingBar
        color="#f11946"
        progress={this.state.progress}
       
      />
       </div>
     )
   }
 }
 
 
 
 
 