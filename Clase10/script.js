// 1. Llamada a una REST API pública usando
// la API pública de JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta de la REST API:", data);
  })
  .catch(error => {
    console.error("Error al llamar la API:", error);
  });

// 2. Uso de una WebAPI del navegador: setTimeout
// Imprime un mensaje en consola después de 3 segundos
setTimeout(() => {
  console.log("Este mensaje aparece después de 3 segundos debido al setTimeout (WebAPI).");
}, 3000);