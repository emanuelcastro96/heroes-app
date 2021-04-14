import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => {
                return ((isAuth)
                    ? (<Component {...props} />)
                    : (<Redirect to='/login' />)
                )
            }}
        />
    )
}

PrivateRoute.prototype = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
