# Inicializamos el diccionario vacío
estudiantes = {}

while True: # Bucle principal del programa
    print("\n--- Sistema de Gestión Escolar ---")
    print("1. Agregar un estudiante") # Opción para agregar estudiante
    print("2. Mostrar lista de estudiantes") # Opción para mostrar estudiantes
    print("3. Buscar estudiante") # Opción para buscar estudiante
    print("4. Eliminar estudiante") # Opción para eliminar estudiante
    print("5. Salir") # Opción para salir del programa
    
    opcion = input("\nSelecciona una opción: ")

    if opcion == "1":
        nombre = input("Ingrese el nombre del estudiante: ").strip()
        try:
            calificacion = float(input(f"Ingrese la calificación de {nombre}: ")) # Convertimos la calificación a float
            estudiantes[nombre] = calificacion # Agregamos el estudiante al diccionario
            print("Estudiante agregado exitosamente.")
        except ValueError:
            print("Error: La calificación debe ser un número.")

    elif opcion == "2":
        if not estudiantes:
            print("La lista está vacía.") # Verificamos si el diccionario está vacío
        else:
            print("Lista de estudiantes:") # Mostramos los estudiantes y sus calificaciones
            for nombre, calif in estudiantes.items(): # Iteramos sobre el diccionario
                print(f"- {nombre}: {calif}") # Mostramos cada estudiante y su calificación

    elif opcion == "3":
        nombre = input("Ingrese el nombre del estudiante a buscar: ").strip() # Solicitamos el nombre del estudiante
        if nombre in estudiantes:
            print(f"{nombre} tiene una calificación de {estudiantes[nombre]}") # Mostramos la calificación si el estudiante existe
        else:
            print(f"El estudiante '{nombre}' no se encuentra en el sistema.") # Mensaje si no se encuentra

    elif opcion == "4":
        nombre = input("Ingrese el nombre del estudiante a eliminar: ").strip() # Solicitamos el nombre del estudiante a eliminar
        if nombre in estudiantes:
            del estudiantes[nombre]
            print(f"Estudiante '{nombre}' eliminado correctamente.") # Confirmamos la eliminación
        else:
            print(f"No se encontró a '{nombre}' para eliminar.") # Mensaje si no se encuentra

    elif opcion == "5":
        print("¡Hasta luego!")
        break

    else:
        print("Opción no válida, por favor intenta de nuevo.")