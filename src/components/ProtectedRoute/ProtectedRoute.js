import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import CurrentUser from '../../contexts/UserContext';

function ProtectedRoute ({ component: Component, ...props}) {
    // const user = React.useContext(CurrentUser); 
    console.log(props.loggedIn);
    return (
        <Route>
            {
                props.loggedIn ? <Component {...props} /> : <Redirect to="/"></Redirect>
            }
        </Route>
    )
}

export default ProtectedRoute;