import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className='container-fluid'>
            <div className='row'>
                    {
                        heroes.map((hero) => {
                            return (
                                <HeroCard
                                    key={hero.id}
                                    {...hero} />
                            )
                        })
                    }
            </div>

        </div>

    )
}
