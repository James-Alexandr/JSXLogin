import React from 'react';
import Input from './input.component';

function registerForm() {

    return (
        <form className="form">
            <h1>Login </h1>
            <Input type="text" placeholder="username" />
            <Input type="password" placeholder="password" />
            <Input type="password" placeholder="Confirm password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default registerForm;