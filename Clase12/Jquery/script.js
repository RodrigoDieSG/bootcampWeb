$(document).ready(function() {
    $('#btnUsuarios').on('click', function() {
        const url = 'https://jsonplaceholder.typicode.com/users'; // API de ejemplo

        $.get(url, function(usuarios) { // Éxito en la solicitud
            const $lista = $('#lista-usuarios'); // Seleccionamos la lista de usuarios
            $lista.empty(); // Limpiamos la lista antes de agregar nuevos elementos

            usuarios.forEach(usuario => {
                // Inyectamos la clase BEM: user-manager__item
                $lista.append(`
                    <li class="user-manager__item">
                        👤 ${usuario.name}
                    </li>
                `);
            });
        }).fail(function() {
            alert("Error al cargar los usuarios");
        });
    });
});