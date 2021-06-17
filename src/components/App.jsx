import React from "react";
import Login from './login.component';

var userLoggedIn = false;




function App() {
  return (
    <div className="container">
      {userLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* { userLoggedIn ? <h1>Hello</h1> : null
        userLoggedIn && <h1>Hello</h1>

      } */}
    </div>
  );
}

export default App;
