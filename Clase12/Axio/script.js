// Referencias al DOM
const btnFetch = document.getElementById('btnFetch');
const userList = document.getElementById('userList');

// Función para obtener datos
const fetchUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Axios realiza la petición GET
        const response = await axios.get(url);
        
        // Axios guarda la respuesta automáticamente en la propiedad .data
        const users = response.data;

        // Limpiamos la lista
        userList.innerHTML = '';

        // Renderizamos cada usuario usando clases BEM
        users.forEach(user => {
            const li = document.createElement('li');
            li.className = 'user-card__item'; // Nombre del elemento BEM
            li.textContent = user.name;
            userList.appendChild(li);
        });

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        userList.innerHTML = `<li class="user-card__item" style="color: red;">Error al cargar datos</li>`;
    }
};

// Evento
btnFetch.addEventListener('click', fetchUsers);