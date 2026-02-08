document.addEventListener("DOMContentLoaded", () => {
  const toggleColorsBtn = document.getElementById("toggleColors");
  const toggleBordersBtn = document.getElementById("toggleBorders");
  const addBoxBtn = document.getElementById("addBox");
  const boxContainer = document.getElementById("boxContainer");

  let isNavy = false;
  let isRounded = false;

  // Alternar colores
  toggleColorsBtn.addEventListener("click", () => {
    isNavy = !isNavy;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      if (isNavy) {
        box.classList.add("navy");
      } else {
        box.classList.remove("navy");
      }
    });
  });

  // Alternar bordes redondeados
  toggleBordersBtn.addEventListener("click", () => {
    isRounded = !isRounded;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      if (isRounded) {
        box.classList.add("rounded");
      } else {
        box.classList.remove("rounded");
      }
    });
  });

  // Agregar nueva caja
  addBoxBtn.addEventListener("click", () => {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    if (isNavy) newBox.classList.add("navy");
    if (isRounded) newBox.classList.add("rounded");
    boxContainer.appendChild(newBox);
  });
});