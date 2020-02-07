// Heladería II

// Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
// 1/4kg: 2 sabores.
// 1/2kg: 3 sabores.
// 3/4kg: 4 sabores.
// 1kg: 5 sabores.
// Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un mensaje con la cantidad de kg y los gustos escogidos.

const icecreamKilos = prompt(`¿Cuánto helado vas a comprar? Estas son tus opciones:
-1/4 kg: 2 sabores.
-1/2 kg: 3 sabores.
-3/4 kg: 4 sabores.
-1 kg: 5 sabores.
(Por favor, ingresá la cantidad sin "kg".)`)

if (icecreamKilos === "1/4") {
    flavor1 = prompt(`Ingresa un sabor.`)
    flavor2 = prompt(`Ingresa otro sabor.`)

    alert(`Tu 1/4 kg de helado tendrá ${flavor1} y ${flavor2}.`)

} else if (icecreamKilos === "1/2") {
    flavor1 = prompt(`Ingresa un sabor.`)
    flavor2 = prompt(`Ingresa otro sabor.`)
    flavor3 = prompt(`Ingresa otro sabor.`)

    alert(`Tu 1/2 kg de helado tendrá ${flavor1}, ${flavor2} y ${flavor3}.`)
} else if (icecreamKilos === "3/4") {
    flavor1 = prompt(`Ingresa un sabor.`)
    flavor2 = prompt(`Ingresa otro sabor.`)
    flavor3 = prompt(`Ingresa otro sabor.`)
    flavor4 = prompt(`Ingresa otro sabor.`)

    alert(`Tu 3/4 kg de helado tendrá ${flavor1}, ${flavor2}, ${flavor3} y ${flavor4}.`)
} else if (icecreamKilos === "1") {
    flavor1 = prompt(`Ingresa un sabor.`)
    flavor2 = prompt(`Ingresa otro sabor.`)
    flavor3 = prompt(`Ingresa otro sabor.`)
    flavor4 = prompt(`Ingresa otro sabor.`)
    flavor5 = prompt(`Ingresa otro sabor.`)

    alert(`Tu 1 kg de helado tendrá ${flavor1}, ${flavor2}, ${flavor3}, ${flavor4} y ${flavor5}.`)
}