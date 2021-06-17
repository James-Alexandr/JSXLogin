import React from "react";
import Login from './login.component';
// import Register from './register.component';

// var userLoggedIn = false;

var userRegistered = false;


function App() {
  return (
    <div className="container">
      <Login userRegistered={userRegistered} />
      {/* {userRegistered ? <Login userRegistered={userRegistered} /> : <Register />} */}
      {/* { userLoggedIn ? <h1>Hello</h1> : null
        userLoggedIn && <h1>Hello</h1>

      } */}
    </div>
  );
}

export default App;


// {userLoggedIn ? <h1>Hello</h1> : <Login />}