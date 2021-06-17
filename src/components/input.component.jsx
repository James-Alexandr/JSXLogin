import { div } from 'prelude-ls';
import React from 'react';

function inputForm(props) {
    return (<div>
        <input type={props.type} placeholder={props.placeholder} />

    </div>

    )
}

export default inputForm;