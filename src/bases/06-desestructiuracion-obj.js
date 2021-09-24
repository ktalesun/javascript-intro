const persona = {
    nombre: 'Tony',
    clave: 'IronMan',
    edad: 45,
    rango: 'Lider de los avengers'
}


// const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);

// const retornaPersona = (usuario) => {
//     console.log(usuario);
// }

// Definiendo un parametro por default, toma el valor definido en el argumento en caso de que no exita en el objeto literal. 
const retornaPersona = ({nombre, edad, clave, rango = 'Cientifico'}) =>{
    // console.log(nombre, edad, clave, rango);

    return {
        nombreClave : clave,
        anios: edad,
        latlng: {
            lat: 12.4587,
            lng: -15.8974,
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng } } = retornaPersona( persona );
console.log(nombreClave, anios);
console.log(lat, lng);