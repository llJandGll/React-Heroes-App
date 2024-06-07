import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    const publishers = ["DC Comics", "Marvel Comics"];

    if (!publishers.includes( publisher )) throw new Error(`El publisher ${ publisher } no existe`)

    return heroes.filter(( hero ) => {
        return hero.publisher === publisher
    });


}