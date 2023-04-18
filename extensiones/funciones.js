


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