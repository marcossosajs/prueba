const fs = require ('fs');
const {getEmpleado, getSueldo} = require ('./extensiones/funciones');

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
const getAll = async (id)=>{
    const empleado = await getEmpleado(id);
    const nombre = empleado.nombre;
    const profesion = empleado.profesion;
    const sueldo = await getSueldo(profesion);

    return `el empleado ${nombre}, de profesion ${profesion} tiene un sueldo de ${sueldo}`;
}
let mensajes = '';
for (let i = 1; i<=database.empleados.length; i++){
    id = i;
    getAll(id)
    .then((mensaje)=>{
        mensajes += `${mensaje}\n`  
        if (id===database.empleados.length){
            fs.writeFileSync(`empleados.txt`, mensajes);
        }
        else{
            console.log('no se pudo crear empleados.txt');
        }
    })
    .catch((error)=>{
        console.log(error);
    });
}
