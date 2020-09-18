import React from 'react';
import SocialContainer from './SocialContainer'
import './Login.css'
class Login extends React.Component{
	render(){
		return(
		<div id="login-form" className="box">
		<form onSubmit={(e)=>e.preventDefault()}>
		<h1>Login</h1>
		<SocialContainer/>
		<p><a href="#">or use your account</a></p>
		<div className="inputs">
        <div className="form-group">
	    <input
	     type="email" 
	     id="email" 
	     name="email" 
	     placeholder="email" 
	     value={this.props.email} 
	     onChange={(e)=>{this.props.handleEmailInput(e.target.value)}}/>
         <span className="red" id="email_err">{this.props.emailerr}</span>
         </div>
         <div className="form-group">
	    <input 
	    type="password" 
	    id="password" 
	    name="password" 
	    placeholder="password" 
	    value={this.props.password}
	    onChange={(e)=>{this.props.handlePassInput(e.target.value)}}/>

		<span className="red" id="pass_err">{this.props.passworderr}</span>
		</div>
        </div>

				
		<p><a href="#">Forgot your Password?</a></p>
		<button id="login-btn" onClick={()=>{this.props.handleLogin(this.props.email, this.props.password)}}>Login</button>
		
		
		</form>
		</div>
		);

	}

}
	

export default Login;
