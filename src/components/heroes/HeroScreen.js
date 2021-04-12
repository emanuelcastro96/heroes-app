import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]); 

    if (hero === undefined) {
        return <Redirect to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleGoBack = () => {
        if(history.length <= 2){
            return history.push('/');
        }else{
            return history.goBack();
        }
    }

    return (
        <div className='row'>
            <div className='col-sm-4'>
                <img
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className='img-fluid img-thumbnail' />
            </div>
            <div className='col-sm-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>
                            Alter ego:
                        </b> {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>
                            Publisher:
                        </b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>
                            First appearance:
                        </b> {first_appearance}
                    </li>
                </ul>
                <hr/>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className='btn btn-primary'
                    onClick={handleGoBack}
                    >Go back
                </button>
            </div>
        </div>
    )
}
