import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types.js/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Emanuel',
            }
        }
        
        dispatch(action)
        
        history.replace('/');
    }

    return (
        <div className="container">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
