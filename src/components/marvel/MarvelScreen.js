import React from 'react'

import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {

    const publisher='Marvel Comics';

    return (
        <>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroesList publisher={publisher}/>
        </>
    )
}
