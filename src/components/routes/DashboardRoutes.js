import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HeroScreen } from '../heroes/HeroScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { DcScreen } from '../dc/DcScreen'
import { NavBar } from '../ui/NavBar'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Route exact path='/hero/:heroId' component={HeroScreen}/>
                    <Route exact to='/search' component={SearchScreen}/>

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
