# Programa para comparar dos números
print("--- Comparador de Números ---")

try:
    # Solicitamos los datos
    valor1 = float(input("Introduce el primer número: ")) 
    valor2 = float(input("Introduce el segundo número: "))

    # Lógica de comparación
    if valor1 > valor2:
        print(f"El número mayor es: {valor1}")
    elif valor2 > valor1:
        print(f"El número mayor es: {valor2}")
    else:
        print("¡Ambos números son iguales!")
        
except ValueError:
    print("Error: Por favor, introduce solo números válidos.")