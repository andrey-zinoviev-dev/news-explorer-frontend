import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import CurrentUser from '../../contexts/UserContext';

function ProtectedRoute ({ component: Component, ...props}) {
    const user = React.useContext(CurrentUser); 
    // React.useEffect(() => {
    //     props.onRedirect();
    // }, [])
    return (
        <Route>
            {
                props.loggedIn ? <Component {...props} /> : <Redirect to="/">{props.onRedirect()}</Redirect>
            }
        </Route>
    )
}

export default ProtectedRoute;