import React, { useMemo } from 'react'
import queryString from 'query-string'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history}) => {
    
    
    const location = useLocation();
    const {q=''} = queryString.parse(location.search);

    const { values, handleInputChange } = useForm({
        searchText: q,
    });
    
    const { searchText } = values;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]) ;
    
    const handleSearch = (e) => {
        e.preventDefault();

        return history.push(`?q=${searchText}`);
    }

    return (
        <>
            <h1>SearchScreen</h1>
            <hr />

            <div className='row'>
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            className='btn mt-2 btn-outline-primary'
                            type='submit'
                        >
                            Search..
                        </button>
                    </form>
                </div>
                <div className="col-sm-7">
                    <h4>Results</h4>
                    {
                        heroesFiltered.map((hero) => {
                            return <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}
