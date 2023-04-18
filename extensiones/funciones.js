

const database = {
    empleados:[
        {
            id : 1,
            nombre: "marcos",
            profesion : "programador",
            pais : "uruguay"
        },
        {
            id : 2,
            nombre: "raul",
            profesion : "mecanico",
            pais : "venezuela"
        },
        {
            id : 3,
            nombre: "juan",
            profesion : "carpintero",
            pais : "chile"
        }
    ],
    sueldos: [
        {
            id:1,
            profesion: "programador",
            sueldo : "1.300.000"
        },
        {
            id:2,
            profesion: "carpintero",
            sueldo : "300.000"
        },
        {
            id:3,
            profesion: "mecanico",
            sueldo : "600.000"
        }
    ]
}
const getEmpleado = (id)=>{
    const empleado = database.empleados.find(e=> e.id === id);
    const promesa = new Promise ((resolve, reject)=>{
        if (empleado){
            resolve(empleado);
        }
        else{
            reject(`hubo un error, no se encontro empleado con el id ${id}`);
        }
    });

    return promesa;
}

const getSueldo = (profesion)=>{
    const sueldo = database.sueldos.find(s=> s.profesion === profesion)?.sueldo;
    const promesa = new Promise ((resolve, reject)=>{
        if (sueldo){
            resolve(sueldo);
        }
        else{
            reject(`error, no se pudo encontrar sueldo para la profesion ${profesion}`);
        }
    });

    return promesa;
}

module.exports = {getSueldo, getEmpleado};
