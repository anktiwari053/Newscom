
import React, { Component } from 'react'


export  class Newsltem extends Component {

  
    
  render() {

   const newcard = {
  height: 400,                  
  display: 'flex',              
  flexDirection: 'column',      
  justifyContent: 'space-between' 

   }
const imgcade = {
  height: 200,                  
  width: '100%',                  
  objectFit: 'cover'            
}





     
       const { title, description ,url,newurl} = this.props;
    return (
       
      <div>
        

       

       
        <div className="card my-3" style={newcard}>
      <img  src={url}className="card-img-top" style={imgcade} alt={title ? title : "News Image"}/>
  <div className="card-body" >
    <h5 className="card-title">{ title ?  title.slice(0, 50) :""}</h5>
    <p className="card-text">{description ? description.slice(0, 90) :""}</p>
    <a href={newurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
  </div>
</div>

      </div>
    )
  }
}
export default Newsltem