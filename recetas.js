// Recetas

// Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas posibles. Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.

const meat = confirm(`¿Tiene carne?`)
const potato = confirm(`¿Tiene papa?`)
const butter = confirm(`¿Tiene manteca?`)
const egg = confirm(`¿Tiene huevos?`)
const onion = confirm(`¿Tiene cebolla?`)

const russianSalad = potato && egg;
const mashedPotatoes = potato && butter;
const tortilla = potato && egg && onion;
const tacos = meat & butter & onion;



if (meat && potato && butter && egg && onion){
    alert(`Usted puede cocinar tortilla de papa y cebolla, y carne al horno con cebolla caramelizada.`)
} else if (meat && potato && butter && egg) {
    alert(`Usted puede cocinar tortilla de papa y carne al horno.`)
}