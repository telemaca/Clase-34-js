let depLocation = prompt(`¿El departamento está cerca, lejos o a mitad de camino del centro? Escriba cerca, lejos o mitad:`);
let yearsOld = prompt(`¿Cuántos años tiene el edificio? Si tiene más de 50, escriba viejo. Si tiene entre 50 y 6, escriba medio. Si tiene menos de 5 años, escriba nuevo.`);
let cost = prompt(`¿Cuánto cuesta el alquiler por mes? Si cuesta menos de $10,000, escriba barato. Si cuesta entre $10,000 y $22,000, escriba medio. Si cuesta más de $22,000, escriba caro.`);
let furniture = prompt(`¿El departamento está amueblado? Si está completamente amueblado, escriba todo. Si tiene algunos muebles, escriba algo. Si no incluye muebles, escriba nada.`)


if (depLocation === "cerca") {
    depLocation = 3
} else if (depLocation === "mitad") {
    depLocation = 2
} else if (depLocation === "lejos") {
    depLocation = 1
}

if (yearsOld === "nuevo") {
    yearsOld = 3
} else if (yearsOld === "medio") {
    yearsOld = 2
} else if (yearsOld === "viejo") {
    yearsOld = 1
} 

if (cost === "barato"){
    cost = 3
} else if (cost === "medio") {
    cost = 2
} else if (cost === "caro") {
    cost = 1
} 

if (furniture === "todo"){
    furniture = 3
} else if (furniture === "algo") {
    furniture = 2
} else if (furniture === "nada") {
    furniture = 1
}

const average = depLocation + yearsOld + cost + furniture

if (average >= 10) {
    alert(`Por sus características, el departamento es una excelente oportunidad.`)
} else if (average < 10 && average >= 7) {
    alert(`Por sus características, el departamento es una buena oportunidad.`)
} else if (average < 7 && average >= 4) {
    alert(`Por sus características, el departamento no es una buena oportunidad.`)
} else if (average < 4) {
    alert(`Por sus características, el departamento es una terrible oportunidad.`)
}