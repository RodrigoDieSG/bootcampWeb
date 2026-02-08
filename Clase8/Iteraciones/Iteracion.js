// Declaración del array biblioteca
var biblioteca = [
  {
    autor: 'Bill Gates',
    titulo: 'The Road Ahead',
    estadoLectura: true
  },
  {
    autor: 'Steve Jobs',
    titulo: 'Walter Isaacson',
    estadoLectura: true
  },
  {
    autor: 'Suzanne Collins',
    titulo: 'Mockingjay: The Final Book of the Hunger Games',
    estadoLectura: false
  }
];

// Mostrar el estado de lectura de cada libro
biblioteca.forEach(function(libro) {
  let estado = libro.estadoLectura ? "Ya leído ✅" : "Pendiente de lectura 📖";
  console.log(`Título: ${libro.titulo} | Autor: ${libro.autor} | Estado: ${estado}`);
});