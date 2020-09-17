import React from 'react';
import SocialContainer from './SocialContainer'
import './Login.css'
class Login extends React.Component{
	state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:""
  };
  handleEmailInput=(e)=>{
    this.setState({
      email:e.target.value,
    } ,()=>console.log(this.state.email))

  }
  handlePassInput=(e)=>{
    this.setState({
      password:e.target.value,
    } ,()=>console.log(this.state.password))

  }
	handleSubmit=(e)=>{
		e.preventDefault()
		this.setState({
			email:"",
			password:"",
		}, console.log(this.state.password))
		const users=[
		{
			email:"a@b.com",
	        password:12,
		},
		{
			email:"p@q.com",
	        password:34,
		},
		{
			email:"x@y.com",
	        password:67,
		},
		];
		if(this.state.email=="" && this.state.password==""){
		
		alert("Enter credentials")
	    }else if(this.state.email==""){
		this.setState({emailerr:"Fill the email"})
		

	    }else if(this.state.password==""){
		this.setState({passworderr:"Fill the password"})

	    }else{


			users.forEach(user=>{

				if(user.email==this.state.email && user.password==this.state.password){

					alert("you are logged in")
				}else{
					alert("invalid credentials")
				}
			})
		}
		
	}	
	render(){
		return(
		<div id="login-form" className="box">
		<form>
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
	     value={this.state.email} 
	     onChange={this.handleEmailInput}/>
         <span className="red" id="email_err">{this.state.emailerr}</span>
         </div>
         <div className="form-group">
	    <input 
	    type="password" 
	    id="password" 
	    name="password" 
	    placeholder="password" 
	    value={this.state.password}
	    onChange={this.handlePassInput}/>

		<span className="red" id="pass_err">{this.state.passworderr}</span>
		</div>
        </div>

				
		<p><a href="#">Forgot your Password?</a></p>
		<button id="login-btn" onClick={this.handleSubmit}>Login</button>
		
		
		</form>
		</div>
		);

	}

}
	

export default Login;
