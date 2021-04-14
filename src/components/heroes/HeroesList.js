import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='container-fluid'>
            <div className='row'>
                {
                    heroes.map((hero) => {
                        return (
                            <div className="col-sm-4" key={hero.id}>
                                <HeroCard {...hero} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}