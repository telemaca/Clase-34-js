// Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

const chosenBrand = prompt(`Para el producto que busca tenemos estas marcas: Samsung, Sony y Huawei. ¿Cuál desea?`)

const message = `Usted ha elegido el siguiente modelo:\n`

if (chosenBrand === "Samsung") {
    chosenModel = prompt(`Tenemos estos modelos: Samsung J6 y Samsung S10. ¿Cuál desea? Ingrese solo el nombre del modelo.`)

    if (chosenModel === "J6"){
        alert(message + `Samsung J6`)
    } else if (chosenModel === "S10"){
        alert(message + `Samsung S10`)
    }

} else if (chosenBrand === "Sony") {
    chosenModel = prompt(`Tenemos estos modelos: Sony XA y Sony X1000. ¿Cuál desea? Ingrese solo el nombre del modelo.`)

    if (chosenModel === "XA"){
        alert(message + `Sony XA`)
    } else if (chosenModel === "X1000"){
        alert(message + `Sony X1000`)
    }
} else if (chosenBrand === "Huawei") {
    chosenModel = prompt(`Tenemos estos modelos: Huawei P9 y Huawei P10. ¿Cuál desea? Ingrese solo el nombre del modelo.`)

    if (chosenModel === "P9"){
        alert(message + `Huawei P9`)
    } else if (chosenModel === "P10"){
        alert(message + `Huawei P10`)
    }
}