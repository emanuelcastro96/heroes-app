import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    return (
        <div className='col-sm-4'>
            <div className='card mt-3 h-auto p-3' style={{maxWidth: 540}}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img
                            src={`/assets/heroes/${id}.jpg`}
                            alt={`${superhero}`}
                            className='card-img' />
                    </div>
                    <div className='col-md-8'>
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p className='card-text'>{characters}</p>
                            }
                            <Link to= {`./hero/${id}`}>Mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
