
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 457896,
        lat: 14.85974,
        lng: 32.75894,

    }
}

console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.table(persona);
console.table(persona2);