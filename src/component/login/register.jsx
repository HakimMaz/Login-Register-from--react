import React, { Component } from 'react';
import loginImg from '../../login.png';


export default class Register extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
      <div className="base-container" ref={this.props.contrainerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
        <img src={loginImg}/> 
        </div>
        <div className="form-register">
         <div className="form-group-register">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username"/>
         </div>
         <div className="form-group-register">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email"/>
         </div>
         <div className="form-group-register">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password"/>
         </div>
        </div>

      </div>
      <div className="footer">
        <button type="button"className="btn">Register</button>
      </div>
      
      
      </div>
        )
        
    }
}