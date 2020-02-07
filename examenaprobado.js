const testScore = prompt(`Ingrese la nota del examen:`)

if (testScore > 7) {
    alert(`Está aprobado.`)
} else if (testScore > 4) {
    alert(`Vas a recuperatorio.`)
} else if (testScore < 4) {
    alert(`Está aplazado.`)
} else {
    alert(`Ingrese un número válido.`)
}