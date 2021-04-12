const empleados  = [
    {
        id: 1,
        nombre: 'Jon',
        sueldo: 10000
    },
    {
        id: 2,
        nombre: 'Messi',
        sueldo: 100000
    },
    {
        id: 3,
        nombre: 'pepito',
        sueldo: 20000
    },
    {
        id: 4,
        nombre: 'mengano',
        sueldo: 15000
    }
];
/*
var acumulador = 0;
array.forEach(e => 
    acumulador += e.sueldo
    );

for(let i = 0; i < array.length; i++){
    acumulador += array[i].sueldos
}

*/
const getTotal = (obj) => {
    let sueldos = obj.map(a => a.sueldo);
    console.log(sueldos);
    let total = sueldos.reduce((prev,actual) => prev+actual, 0);
    console.log(total);
}

getTotal(empleados);