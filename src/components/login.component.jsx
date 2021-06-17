import React from 'react';
import Input from './input.component';

function loginForm(props) {

    return (
        <form className="form">
            <h1>{props.userRegistered ? "Login" : "Register"} </h1>
            <Input type="text" placeholder="username" />
            <Input type="password" placeholder="password" />
            {!props.userRegistered ? <Input type="password" placeholder="password" /> : null}
            <button type="submit">{props.userRegistered ? "Login" : "Register"}</button>
        </form>
    )
}

export default loginForm;