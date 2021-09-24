

const saludar = function (nombre){
    return `Hola ${nombre}`;
}


const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = ()=> 'Hola Mundo';


console.log(saludar('Kevin'));
console.log(saludar2('Kevin'));
console.log(saludar3('Kevin'));
console.log(saludar4());

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC1247',
//         username: 'kleon1',
//         name: nombre,
//     }
// }

const getUsuarioActivo = (nombre)=>({
    uid: 'ABC1247',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Kevin');
console.log(usuarioActivo);