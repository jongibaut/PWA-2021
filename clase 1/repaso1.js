const nombre = "Jon"; //constante NO LO PUEDO MODIFICAR
const jon = {
    nombre:'jon',
    apellido: 'Gibaut',
    edad : 19,
    lenguajes : [
        {
            nombre: 'JS',
            experiencia : 4
        },
        {
            nombre: 'C++',
            experiencia: 3
        }
    ],
    hobbies : ['Tocar la guitarra 🎸', 'programar 🤓'],

};
const jugadores = [
    {
    nombre : 'Leo',
    apellido : 'Messi',
    edad : 33,
    posiciones : [
        {
            posicion : 'Extremo por derecha',
            nivel : 10
        },
        {
            posicion : 'Enganche',
            nivel : 8,
            posicionNatural : false
        }
    ],
    clubes : ['Barcelona', 'Argentina'],

},
{
    nombre : 'Leo2',
    apellido : 'Messi2',
    edad : 33,
    posiciones : [
        {
            posicion : 'Extremo por derecha',
            nivel : 10
        },
        {
            posicion : 'Enganche',
            nivel : 8,
            posicionNatural : false
        }
    ],
    clubes : ['Barcelona', 'Argentina'],

}
];


const verificarEdad = (edad) => {
    let verif = false;
    if(edad < 18){
        verif = false;
    }
    else{
        verif = true
    }
}

const listar = (jugadores) => {
    jugadores.forEach(jugador => {
        console.log(jugador.nombre);
    });
}

listar(jugadores);
//emojis windows + punt'o en mac ctrl + command + espacio