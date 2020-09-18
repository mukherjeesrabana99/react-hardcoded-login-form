import React from 'react';
import './App.css';
import Login from './Login';
import Page from './Page';
let users =[

	{

		"email":"a@b.com",
	    "password":12,
	},
	{
	    "email":"p@q.com",
	    "password":34,
	},
	{
		"email":"x@y.com",
	    "password":67,
	},
	];

class App extends React.Component{
	
	state={
    email:"",
    password:"",
    emailerr:"",
    passworderr:""
  };
  handleEmailInput=(email)=>{
    this.setState({
      email:email,
    } ,()=>console.log(this.state.email))

  }
  handlePassInput=(password)=>{
    this.setState({
      password:password,
    } ,()=>console.log(this.state.password))

  }
  handleLogin=(email,password)=>{

	this.setState({

		email:"",
		password:"",
	}, console.log(this.state.password))
	
	if(email=="" && password==""){
		console.log("enter")

		
		alert("Enter credentials")
	}else if(email==""){
		console.log("emailerr set")

		this.setState({emailerr:"Fill the email"})
		

	}else if(password==""){
		console.log("passworderr set")

		this.setState({passworderr:"Fill the password"})

	}else{




		users.forEach(user=>{



			if(user.email==email && user.password==password){
				


				alert("you are logged in")
  			}else{

  				console.log(user.email,email, user.password, password)
  				alert("invalid credentials")
  			}
		})
	}
		
  }	
  render(){
     return (
    <div className="App">
      <Login email={this.state.email}
      password={this.state.password}
      emailerr={this.state.emailerr}
      passworderr={this.state.passworderr}
      handleEmailInput={this.handleEmailInput}
      handlePassInput={this.handlePassInput}
      handleLogin={this.handleLogin}/>
      
      <Page/>
    </div>
  );


  }
}
 

export default App;
