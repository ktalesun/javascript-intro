import {getHeroeById} from './bases/08-import-export'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // console.log('2 segundos despues')
//         // resolve();
//     },2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// });


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontró el heroe');
            }
        },2000);
    });
}

// getHeroeByIdAsync(8).then((heroe) => { console.log('Heroe', heroe) })
// .catch((err) => { console.warn(err) });

getHeroeByIdAsync(2).then(console.table).catch(console.warn);