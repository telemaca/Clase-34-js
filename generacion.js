// A qué generación pertenece

// Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const yearOfBirth = Number(prompt(`Ingrese su año de nacimiento:`))

if (yearOfBirth <= 1964) {
    alert(`Sos un baby boomer.`)
} else if (yearOfBirth <= 1980) {
    alert(`Sos un gen X.`)
} else if (yearOfBirth <= 1995) {
    alert(`Sos un millenial.`)
} else if (yearOfBirth <= 2010){
    alert(`Sos un centennial.`)
} else {
    alert(`No sos ni baby boomer, ni gen X, ni millenial, ni centenial.`)
}