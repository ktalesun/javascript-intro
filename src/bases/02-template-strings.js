let nombre = 'Kevin';
let apellido = 'Leon';

const template = `Hola, tu nombre es ${nombre} ${apellido}`;

console.log(template);

function getSaludo(nombre){
    return `Hola cómo estás ${nombre} ${apellido}`;
}

console.log(getSaludo(nombre));