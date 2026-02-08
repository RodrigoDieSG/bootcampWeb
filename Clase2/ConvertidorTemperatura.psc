Proceso ConvertidorTemperatura
	Definir celsius, convertirCelsiusAFahrenheit Como Real
	Escribir "ingresa la temperatura en grados Celsius:"
	Leer celsius
	
	convertirCelsiusAFahrenheit <- fahrenheit(celsius)
	Escribir "La temperatura en grados Fahrenheit es: " convertirCelsiusAFahrenheit
FinProceso

Funcion convertirCelsiusAFahrenheit <- fahrenheit(cGrados)
	Definir convertirCelsiusAFahrenheit Como Real
	
	convertirCelsiusAFahrenheit <- (cGrados * (9 / 5)) + 32
	
FinFuncion