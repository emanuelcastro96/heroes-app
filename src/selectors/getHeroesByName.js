import { heroes } from "../data/heroes"

export const getHeroesByName = (name='') => {
    
    const lowerCaseName = name.toLowerCase();

    if(name === ''){
        return [];
    } else {
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(lowerCaseName))
    }
}
