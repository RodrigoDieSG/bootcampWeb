Proceso CalcularSumaPares
	Definir numeroIngresado, sumaPares Como Entero
	Escribir "Ingresa el número par como límite:"
	Leer numeroIngresado
	
	Si numeroIngresado MOD 2 <> 0 Entonces
		Escribir "El número ingresado no es par. Por favor ingresa un número par."
	SiNo
		sumaPares <- resultado(numeroIngresado)
		Escribir "La suma de los números pares desde 1 hasta " numeroIngresado, " es: " sumaPares
	FinSi
	
FinProceso

Funcion sumaPares <- resultado(limite)
	Definir sumaPares, i Como Entero
	sumaPares <- 0
	i <- 2
	
	Mientras i <= limite Hacer
		sumaPares <- sumaPares + i
		i <- i +2
	FinMientras
	
FinFuncion