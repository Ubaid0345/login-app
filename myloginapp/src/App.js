import React, { Component } from 'react';
import Register from  './Components/Register.js';
import Login from './Components/Login.js'
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
    this.setState({ page: !this.state.page })
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
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password).then((data) => {
      this.setState({message:"Register successfully", type:1},()=>{
        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirmPassword.value = "";
      })
    }).catch((error) => {
      this.setState({message: error.message, type:0})
    });

  }

  render() {
    return (

      <div>
        {this.state.page ?
          <Register type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} /> :
          <Login switch={this.pageSwitchHandler} />
        }
      </div>
    )
  }
}

export default App;
