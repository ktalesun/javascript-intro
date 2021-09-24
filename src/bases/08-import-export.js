// Importacion por defecto e individual: Si no está encerrada en llaves corresponde a una por defecto, si está encerrada en llaves es individual.
import heroes, {owners} from '../data/heroes';


 export const getHeroeById = (id)=>{
   return heroes.find((heroe) => heroe.id === id);
}

 export const getHeroesByOwner = (owner) =>{
    return heroes.filter((heroe) => heroe.owner === owner);
}


