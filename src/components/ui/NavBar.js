import React, { useContext } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types.js/types';


export const NavBar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');

        const action = {
            type: types.logout
        }

        dispatch(action);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Heroes App</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact to='/dc'
                        >DC
                        </NavLink>
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact to='/marvel'
                        >Marvel
                        </NavLink>
                        <NavLink
                            className='nav-item nav-link'
                            activeClassName='active'
                            exact to='/search'
                        >Search
                        </NavLink>
                     
                    </ul>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <span className='nav-item nav-link m-0'>{user.name}</span>
                        <button 
                            className='nav-item nav-link btn'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        {/* <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact to='/login'
                            onClick={()=>{handleLogin()}}
                        >Logout
                        </NavLink> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
