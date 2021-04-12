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
    console.log(obj);
    let sueldos = obj.map(a => a.sueldo).reduce((prev,actual) => prev+actual, 0);
    console.log(sueldos);
    //let total = sueldos.reduce((prev,actual) => prev+actual, 0);
    //console.log(total);
}

/*
const buscador = (id, obj) => {
    obj.forEach(e=>
        if(e.id === id){
            eliminado = true;
            break;
        }
        )
    if(eliminado == true){
        obj.splice(id, 1);
    }
}

*/
const del = (id, obj) => {
    let index = obj.findIndex(a => a.id === id);
    console.log(index);
    obj.splice(index,1); // splice corta el JSON, le paso como parametros el id donde quiero empezar a cortar y la cantidad de posiciones que quiero cortar
    console.log(obj);
}

getTotal(empleados);
del(3, empleados);

/*

map --> me hace un array con un elemento de un objeto,
filter --> me hace un objeto con las entidades de un objeto inicial que cumplan una funcion,
reduce --> acumulador


*/