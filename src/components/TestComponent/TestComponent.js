import React from 'react';

function TestComponent(props) {
    return (
        props.loggedIn ? <span>Yes</span> : <span>No</span>
    )
}

export default TestComponent;