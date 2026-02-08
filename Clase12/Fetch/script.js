const btnLoad = document.getElementById('btnLoad');
const userContainer = document.getElementById('userContainer');

/**
 * Función asíncrona para obtener usuarios
 * Utiliza Fetch API (Nativo)
 */
async function loadUsers() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Paso 1: Petición HTTP
        const response = await fetch(apiURL);

        // Verificamos si la respuesta fue exitosa (status 200)
        if (!response.ok) throw new Error('Error en el servidor');

        // Paso 2: Convertir flujo de datos a JSON legible
        const users = await response.json();

        // Paso 3: Limpiar y Renderizar usando BEM
        userContainer.innerHTML = '';

        users.forEach(user => {
            const li = document.createElement('li');
            li.className = 'user-directory__item'; // Elemento BEM
            li.innerHTML = `<strong>👤</strong> &nbsp; ${user.name}`;
            userContainer.appendChild(li);
        });

    } catch (error) {
        console.error('Fetch Error:', error);
        userContainer.innerHTML = `<li class="user-directory__item" style="color:red">No se pudo cargar la lista</li>`;
    }
}

// Escuchador de eventos
btnLoad.addEventListener('click', loadUsers);