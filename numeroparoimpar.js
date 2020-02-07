// Número par o impar

// Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

const numero = Number(prompt(`Ingrese un número:`))

const parOImpar = numero % 2

if (parOImpar === 0) {
    alert(`El número ${numero} es par.`)
} else {
    alert(`El número ${numero} es impar.`)
}