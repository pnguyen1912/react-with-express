import React from 'react';
import axios from 'axios';

class App extends React.Component {

  createUser(){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    let data={username: username,password: password}
    axios.post('http://localhost:8080/createuser',data)
  }

  tryToLogIn =()=>{
    let username1 = document.getElementById('username1').value
    let password1 = document.getElementById('password1').value
    let data={username: username1, password: password1}
    axios.post('http://localhost:8080/getuserdata',data)
  }

  render(){
  return (
    <div>
      {/* Create user info
      <h1>Username</h1>
      <input id="username" />
      <h1>Password</h1>
      <input id="password" />
      <br/>
      <br/>
      <button onClick={this.createUser}>Create</button> */}

Log in page
      <h1>Username</h1>
      <input id="username1" />
      <h1>Password</h1>
      <input id="password1" />
      <br/>
      <br/>
      <button onClick={this.tryToLogIn}>Login</button>

    </div>
  );
}}
export default App;
