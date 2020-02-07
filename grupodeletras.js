const userLetter = prompt(`Ingrese una letra minúscula para saber a qué grupo pertenece:`)


if (userLetter === "a" || userLetter === "e" || userLetter === "i" || userLetter === "o" || userLetter === "u") {
    alert(`Estás en el grupo A.`)
} else if (userLetter === "b" || userLetter === "c" || userLetter === "d" || userLetter === "f" || userLetter === "g") {
    alert(`Estás en el grupo B.`)
} else if (userLetter === "h" || userLetter === "j" || userLetter === "k" || userLetter === "l" || userLetter === "m") {
    alert(`Estás en el grupo C.`)
} else if (userLetter === "n" || userLetter === "p" || userLetter === "q" || userLetter === "r") {
    alert(`Estás en el grupo D.`)
} else if (userLetter === "s" || userLetter === "t" || userLetter === "v" || userLetter === "w" || userLetter === "x" || userLetter === "y" || userLetter === "z") {
    alert(`Estás en el grupo E.`)
} else {
    alert(`El valor ingresado no es válido. Debe ingresar una letra minúscula.`)
}