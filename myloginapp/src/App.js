import React, { Component } from 'react';
import Register from  './Components/Register.js';
import Login from './Components/Login.js'
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
// import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAbz7Xp84As50mztZToNrr8IBPLYveBPWc",
  authDomain: "my-login-app-25f5e.firebaseapp.com",
  databaseURL: "https://my-login-app-25f5e-default-rtdb.firebaseio.com",
  projectId: "my-login-app-25f5e",
  storageBucket: "my-login-app-25f5e.appspot.com",
  messagingSenderId: "918779165819",
  appId: "1:918779165819:web:8078d9e886bda4c833b6de"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// if(!firebase.app.length < 0){
//   firebase.initializeApp(firebaseConfig);
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      message: "",
      type: 1,
    };
  }

  pageSwitchHandler = (event) => {
    this.setState({ page: !this.state.page, message:null, type:null })
    event.preventDefault();
  }

  registrationHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      this.setState({ message: "psddword does not match", type: 0 })
      return;
    }
    // const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password).then((data) => {
      this.setState({message:"Register successfully", type:1},()=>{
        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirmPassword.value = "";
      })
    }).catch((error) => {
      this.setState({message: error.message, type:0})
    });
  };

  googleLoginHandler = (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((response) =>{
      console.log(response.user)
    }).catch((reject) =>{
      console.log(reject)
    })
    alert();
  }

  loginHandler = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password).then((data)=>{
      console.log(data);
      if(data.user.emailVerified === true){
        this.setState({message: "login successfull", type:1})
      }
      else{
        this.setState({message: "email is not verified", type:0})
      }

    }).catch((error)=>{
      console.log(error)
      this.setState({message: error.message, type:0})

    })
  }

  render() {
    return (

      <div>
        {this.state.page ?
          <Register type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} google={this.googleLoginHandler} /> :
          <Login type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} login={this.loginHandler} />
        }
      </div>
    )
  }
}

export default App;
