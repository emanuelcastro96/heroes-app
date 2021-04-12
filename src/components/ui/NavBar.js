import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand' exact to='/'>Heroes App</Link>
                
                <div className="collapse navbar-collapse md-11" id="navbarNav">
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
                            activeClassName='active' 
                            className='nav-item nav-link'
                            exact to='/login'
                            >Logout
                        </NavLink>
                    </ul>
                </div>
              
            </div>
        </nav>
    )
}
