// --- Selectores del DOM ---
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const dashboardSection = document.getElementById('dashboardSection');
const apiResult = document.getElementById('apiResult');

// --- Navegación entre vistas ---
document.getElementById('goRegister').addEventListener('click', () => {
    loginSection.classList.add('auth-card--hidden');
    registerSection.classList.remove('auth-card--hidden');
});

document.getElementById('goLogin').addEventListener('click', () => {
    registerSection.classList.add('auth-card--hidden');
    loginSection.classList.remove('auth-card--hidden');
});

// --- Lógica de Registro (Local Storage) ---
document.getElementById('btnSaveUser').addEventListener('click', () => {
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPass').value;
    const age = document.getElementById('regAge').value;

    if(user && pass && age) {
        localStorage.setItem(user, JSON.stringify({ pass, age }));
        alert("Usuario registrado con éxito");
        registerSection.classList.add('auth-card--hidden');
        loginSection.classList.remove('auth-card--hidden');
    } else {
        alert("Por favor completa todos los campos");
    }
});

// --- Lógica de Login ---
document.getElementById('btnLogin').addEventListener('click', () => {
    const userInput = document.getElementById('loginUser').value;
    const passInput = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('loginError');

    const storedData = localStorage.getItem(userInput);
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.pass === passInput) {
            // Éxito
            showDashboard(userInput);
        } else {
            errorMsg.textContent = "Contraseña incorrecta";
        }
    } else {
        errorMsg.textContent = "El usuario no existe";
    }
});

function showDashboard(username) {
    loginSection.classList.add('auth-card--hidden');
    dashboardSection.classList.remove('auth-card--hidden');
    document.getElementById('displayUser').textContent = username;
}

// --- Consumo de API (Fetch) ---

// 1. GET: Obtener lista de usuarios
document.getElementById('btnGet').addEventListener('click', async () => {
    apiResult.textContent = "Cargando datos...";
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        apiResult.innerHTML = `<strong>Usuarios encontrados:</strong><br>` + 
                               data.map(u => `- ${u.name}`).join('<br>');
    } catch (e) { apiResult.textContent = "Error en GET"; }
});

// 2. POST: Crear una nueva publicación (simulado)
document.getElementById('btnPost').addEventListener('click', async () => {
    apiResult.textContent = "Enviando datos...";
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title: 'Nuevo Post', body: 'Contenido', userId: 1 }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const data = await res.json();
        apiResult.innerHTML = `<strong>Respuesta del Servidor (POST):</strong><br> ID creado: ${data.id} <br> Título: ${data.title}`;
    } catch (e) { apiResult.textContent = "Error en POST"; }
});

// Logout
document.getElementById('btnLogout').addEventListener('click', () => location.reload());