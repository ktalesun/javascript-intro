const personajes = ['Gokú', 'Vegueta', 'Trunks'];

const [ , , p1] = personajes;


const retornaArreglo = ()=>{
    return ['ABC', 123];
}


// console.log(p1)
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const usarEstado = (valor)=>{
    return [valor, ()=>{console.log('Hola Mundo!')}];
}

const [nombre , setEstado] = usarEstado('Gokú');
console.log(nombre);
setEstado();