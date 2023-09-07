const url = "https://jsonplaceholder.typicode.com/users";   /* Aca guardo en una variable la url donde voy a enviar los datos */

/* Creo el evento para que se guarden los datos */
const btn = document.querySelector("#boton");
btn.addEventListener('click', () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const fecha = document.querySelector("#fecha").value;
    datos.nombre = nombre;
    datos.apellido = apellido;
    datos.fecha = fecha;
});

/* Aca declaro un objeto al cual le voy a agregar todos los datos del formulario */
const datos = {
    nombre: " ",
    apellido: " ",
    fecha: " "
};



const promesa = {
    method: 'POST',/* Declaro el metodo que quiero usar */
    Headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos) /* Convierto todos los datos a string del objeto */
};


fetch(url, promesa)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('fallo el envio');
        }
        return Response.json();
    })
    .then(datos => {
        console.log('respuesta del servidor', datos);
    })
    .catch(error => {

        console.error('Error', error);
    })