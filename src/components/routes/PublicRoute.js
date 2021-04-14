import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

export const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest  /* includes "path" property */
}) => {

    return (
        <Route
            {/* path: */...rest}
            component={(props) => {
                return (
                    (!isAuth)
                        ? (<Component {...props} />)
                        : (<Redirect to='/'/>)
                )
            }}
        />
    )
}

PublicRoute.prototype = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}