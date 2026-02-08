Algoritmo CalificacionesAlumnos
	
	Limpiar Pantalla
	Escribir "Materia: Programación"
	Escribir ""
	Definir M, respuesta, indice Como Entero
	Definir suma, promedio como Real
	
	Dimension calificaciones[5]
	Escribir "Ingrese las calificaciones: "
	Escribir ""
	
	Para M<-1 hasta 5 con paso 1 Hacer
		Escribir "Ingrese la Calificación del alumno ",M,"  ? " Sin Saltar
		Leer calificaciones[M]
	FinPara
	
	Limpiar Pantalla
	
	escribir ""
	Para M<-1 hasta 5 con paso 1 Hacer
		escribir "La calificación del alumno ",M," es ",calificaciones[M]
	FinPara
	
	Escribir ""
	suma <- 0
	Para M<-1 hasta 5 con paso 1 Hacer
		suma <- suma + calificaciones[M]
	FinPara
	promedio <- suma / 5
	Escribir "El promedio de calificaciones es: ", promedio
	
	Escribir "¿Desea modificar alguna calificación? (1 = Si / 0 = No): "
	Leer respuesta
	Si respuesta = 1 Entonces
		Escribir "¿Qué alumno desea modificar? (1 al 5): "
		Leer indice
		Si indice >= 1 Y indice <= 5 Entonces
			Escribir "Ingrese la nueva calificación para el alumno ", indice, ": " Sin Saltar
			Leer calificaciones[indice]
		SiNo
			Escribir "Índice invalido."
		FinSi
	FinSi
	
	Limpiar Pantalla
	Escribir ""
	Para M<-1 hasta 5 con paso 1 Hacer
		Escribir "La calificación del alumno ",M," es ",calificaciones[M] 
	FinPara
FinAlgoritmo