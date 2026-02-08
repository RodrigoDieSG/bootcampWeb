// Seleccionamos los elementos de la página
const boton = document.getElementById('btnFetch');
const contenedor = document.getElementById('contenedor-api');

// Función principal para consumir la API
async function cargarInformacion() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=9'; // Limitamos a 9 resultados

    try {
        // 2. Consumir la API usando JS (fetch)
        const respuesta = await fetch(url);
        
        // 3. Almacenar los datos relevantes en variables
        const datosRecibidos = await respuesta.json();
        
        // Llamamos a la función para pintar los datos
        mostrarDatos(datosRecibidos);

    } catch (error) {
        console.error("Hubo un error:", error);
        contenedor.innerHTML = "<p>No se pudo conectar con la API.</p>";
    }
}

// 4. Mostrar el contenido en la página web
function mostrarDatos(listaDePosts) {
    contenedor.innerHTML = ""; // Limpiamos el contenedor

    listaDePosts.forEach(post => {
        // Creamos una "variable" para el título y el cuerpo de cada item
        const titulo = post.title;
        const contenido = post.body;

        // Creamos el HTML dinámicamente
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';
        tarjeta.innerHTML = `
            <h3>${titulo}</h3>
            <p>${contenido}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Escuchar el clic del botón para iniciar todo
boton.addEventListener('click', cargarInformacion);