Proceso AreadelCirculo
	Definir areaCirculo Como Real
	
	areaCirculo <- Area(Circ)
	
	Escribir "El área del circulo es: " areaCirculo
FinProceso

Funcion areaCirculo <- area(Circ)
	Definir radio, areaCirculo Como Real
	Escribir "ingresa el valor del radio:"
	Leer radio
	
	areaCirculo <- 3.1416 * (radio ^ 2)
FinFuncion