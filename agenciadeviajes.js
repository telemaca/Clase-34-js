// Agencia de viajes

// Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

const rioDeJaneiroBrasil = 3000
const madridEspaña = 5000
const atenasGrecia = 6500

let chosenOption = prompt(`¡Hola! Estos son los paquetes disponibles. El precio corresponde por día por persona:
- Río de Janeiro, $3000. Código: RIO
- Madrid, $5000 por día. Código: MADRID
- Atenas, $6500 por día. Código: ATENAS
Escriba el código del paquete que desea elegir:`);

let days = prompt(`¿Cuántos días desea hospedarse?`);

let people = prompt(`¿Cuántas personas van a viajar?`);

if (chosenOption === "RIO") {
    precioFinal = rioDeJaneiroBrasil * days * people
    makeChanges = confirm(`El precio final para el paquete elegido a Río de Janeiro es: $${precioFinal}. \n ¿Desea hacer algún cambio?`)

    if (makeChanges) {
        changeToMake = prompt(`¿Qué desea cambiar: destino, días o personas?`)

        if (changeToMake === "destino"){
            chosenOption = prompt(`Ingrese el código del destino que quiere elegir: MADRID o ATENAS.`)

            if (chosenOption === "MADRID") {
                precioFinal = madridEspaña * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Madrid
                Precio por día: ${madridEspaña}
                Días: ${days}
                Personas: ${people}`)
            } else if (chosenOption === "ATENAS") {
                precioFinal = atenasGrecia * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Atenas
                Precio por día: ${atenasGrecia}
                Días: ${days}
                Personas: ${people}`)
            }


        } else if (changeToMake === "días") {
            days = prompt(`¿Cuántos días desea hospedarse?`);
            precioFinal = rioDeJaneiroBrasil * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Río de Janeiro
            Precio por día: ${rioDeJaneiroBrasil}
            Días: ${days}
            Personas: ${people}`)

        } else if (changeToMake === "personas") {
            people = prompt(`¿Cuántas personas van a viajar?`);
            precioFinal = rioDeJaneiroBrasil * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Río de Janeiro
            Precio por día: ${rioDeJaneiroBrasil}
            Días: ${days}
            Personas: ${people}`)
        }
    }

} else if (chosenOption === "MADRID") {
    precioFinal = madridEspaña * days * people
    makeChanges = confirm(`El precio final para el paquete elegido a Madrid es: $${precioFinal}. \n ¿Desea hacer algún cambio?`)

    if (makeChanges) {
        changeToMake = prompt(`¿Qué desea cambiar: destino, días o personas?`)

        if (changeToMake === "destino"){
            chosenOption = prompt(`Ingrese el código del destino que quiere elegir: RIO o ATENAS.`)

            if (chosenOption === "RIO") {
                precioFinal = rioDeJaneiroBrasil * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Río de Janeiro
                Precio por día: ${rioDeJaneiroBrasil}
                Días: ${days}
                Personas: ${people}`)
            } else if (chosenOption === "ATENAS") {
                precioFinal = atenasGrecia * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Atenas
                Precio por día: ${atenasGrecia}
                Días: ${days}
                Personas: ${people}`)
            }


        } else if (changeToMake === "días") {
            days = prompt(`¿Cuántos días desea hospedarse?`);
            precioFinal = madridEspaña * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Madrid
            Precio por día: ${madridEspaña}
            Días: ${days}
            Personas: ${people}`)

        } else if (changeToMake === "personas") {
            people = prompt(`¿Cuántas personas van a viajar?`);
            precioFinal = madridEspaña * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Madrid
            Precio por día: ${madridEspaña}
            Días: ${days}
            Personas: ${people}`)
        }
    }
} else if (chosenOption === "ATENAS") {
    makeChanges = precioFinal = atenasGrecia * days * people
    confirm(`El precio final para el paquete elegido a Atenas es: $${precioFinal}. \n ¿Desea hacer algún cambio?`)

    if (makeChanges) {
        changeToMake = prompt(`¿Qué desea cambiar: destino, días o personas?`)

        if (changeToMake === "destino"){
            chosenOption = prompt(`Ingrese el código del destino que quiere elegir: MADRID o RIO.`)

            if (chosenOption === "MADRID") {
                precioFinal = madridEspaña * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Madrid
                Precio por día: ${madridEspaña}
                Días: ${days}
                Personas: ${people}`)
            } else if (chosenOption === "RIO") {
                precioFinal = rioDeJaneiroBrasil * days * people
                confirm(`El precio final para el paquete elegido es: $${precioFinal}. \n 
                Destino: Río de Janeiro
                Precio por día: ${rioDeJaneiroBrasil}
                Días: ${days}
                Personas: ${people}`)
            }


        } else if (changeToMake === "días") {
            days = prompt(`¿Cuántos días desea hospedarse?`);
            precioFinal = atenasGrecia * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Atenas
            Precio por día: ${atenasGrecia}
            Días: ${days}
            Personas: ${people}`)

        } else if (changeToMake === "personas") {
            people = prompt(`¿Cuántas personas van a viajar?`);
            precioFinal = atenasGrecia * days * people
            alert(`El nuevo precio final para el paquete elegido es: $${precioFinal}. \n 
            Destino: Atenas
            Precio por día: ${atenasGrecia}
            Días: ${days}
            Personas: ${people}`)
        }
    }
}