import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    
    const publisher = 'DC Comics';
    
    return (
        <>
            <h1>DC Screen</h1>
            <hr/>
            <HeroesList publisher={publisher}/>
        </>
    )
}
