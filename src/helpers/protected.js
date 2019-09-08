import React from 'react'
import { Route, Redirect } from 'react-router-dom';

/**
 * @description - function to protect a route
 * @function VerifyAuth
 * @param {object} - props. the props passed into the component
 */
export const ProtectedRoute = ({component: Component, user: user, ...rest}) => {
    return (
        <Route
            {...rest}
            render ={props => {

                if (user){
                    return <Component user={user}{...props} />
                }
                else {
                    return <Redirect to="/" /> 
                }
            }}
        />
    )
}
