import React from "react";
import Login from './login.component';

var userLoggedIn = true;

function App() {
  return (
    <div className="container">
      {userLoggedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
