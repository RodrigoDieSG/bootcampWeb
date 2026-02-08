-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS restaurante_db;
USE restaurante_db;

-- 2. Crear Tabla de Categorías
CREATE TABLE IF NOT EXISTS Categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    encargado VARCHAR(100)
);

-- 3. Crear Tabla de Platos
CREATE TABLE IF NOT EXISTS Platos (
    id_plato INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    nivel_dificultad ENUM('Bajo', 'Medio', 'Alto'),
    precio DECIMAL(10, 2) NOT NULL,
    id_categoria INT,
    CONSTRAINT fk_categoria_plato 
        FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

-- 4. Crear Tabla de Ingredientes (Almacén)
CREATE TABLE IF NOT EXISTS Ingredientes (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    unidad_medida VARCHAR(20), -- ej: gramos, ml, unidades
    stock_actual DECIMAL(10, 2) DEFAULT 0
);

-- 5. Crear Tabla de Recetas
CREATE TABLE IF NOT EXISTS Recetas (
    id_plato INT,
    id_ingrediente INT,
    cantidad_requerida DECIMAL(10, 2),
    PRIMARY KEY (id_plato, id_ingrediente),
    FOREIGN KEY (id_plato) REFERENCES Platos(id_plato) ON DELETE CASCADE,
    FOREIGN KEY (id_ingrediente) REFERENCES Ingredientes(id_ingrediente) ON DELETE CASCADE
);

-- 6. Datos de Prueba
INSERT INTO Categorias (nombre, encargado) VALUES ('Entradas', 'Chef Sofia'), ('Fuertes', 'Chef Carlos');

INSERT INTO Platos (nombre, precio, id_categoria) VALUES 
('Tacos de Pastor', 45.00, 2),
('Sopa de Lima', 60.00, 1);

INSERT INTO Ingredientes (nombre, unidad_medida, stock_actual) VALUES 
('Tortilla', 'unidades', 100),
('Carne de Cerdo', 'gramos', 5000),
('Limon', 'unidades', 20);