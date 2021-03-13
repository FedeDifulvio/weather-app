import React from 'react'
import './form.css'

class Form extends  React.Component{
 

   render(){ 
  
       return (
         <div className="containerForm">
           <div className="cardForm">
             <h1 className="title animate__animated animate__fadeInDown">Weather App</h1>
             <form onSubmit={this.props.getData}>
               <input className="input" name="city" type="text" placeholder="city" />
               <input className="input" name="country" type="text" placeholder="country" />
               <input
                 className="button"
                 type="submit"
                 value="submit"
               />
             </form>
           </div>
         </div>
       );
   }
} 

export default Form;