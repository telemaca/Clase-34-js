
let breadChosen = prompt(`¿Qué tipo de pan quiere: blanco, negro o integral?`)

if (!(breadChosen === "blanco" || breadChosen === "negro" || breadChosen === "integral")) {
    breadChosen = "(sin especificar)";
    alert(`¡Atención! El pedido saldrá incompleto porque no eligió un pan correcto.`)
}

let ingredient1Chosen = prompt(`¿Cuál de los siguientes quiere incluir: tomate, lechuga o pimiento?`)

if (!(ingredient1Chosen === "tomate" || ingredient1Chosen === "lechuga" || ingredient1Chosen === "pimiento")) {
    ingredient1Chosen = "(sin especificar)";
    alert(`¡Atención! El pedido saldrá incompleto porque no eligió un ingrediente correcto.`)
}

let ingredient2Chosen = prompt(`¿Cuál de los siguientes quiere incluir: cebolla, aceituna o pepino?`)

if (!(ingredient2Chosen === "cebolla" || ingredient2Chosen === "aceituna" || ingredient2Chosen === "pepino")) {
    ingredient2Chosen = "(sin especificar)";
    alert(`¡Atención! El pedido saldrá incompleto porque no eligió un ingrediente correcto.`)
}

let dressingChosen = prompt(`¿Qué aderezo quiere: mayonesa, mostaza o picante?`)

if (!(dressingChosen === "mayonesa" || dressingChosen === "mostaza" || dressingChosen === "picante")) {
    dressingChosen = "(sin especificar)";
    alert(`¡Atención! El pedido saldrá incompleto porque no eligió un aderezo correcto.`)
}

let sodaChosen = prompt(`¿Qué gaseosa quiere: Coca, Pepsi o Sprite?`)

if (!(sodaChosen === "Coca" || sodaChosen === "Pepsi" || sodaChosen === "Sprite")) {
    sodaChosen = "(sin especificar)";
    alert(`¡Atención! El pedido saldrá incompleto porque no eligió una gaseosa correcta.`)
}

alert(`Tu sándwich tendrá:
-pan ${breadChosen}
-ingrediente 1: ${ingredient1Chosen}
-ingrediente 2: ${ingredient2Chosen}
-aderezo: ${dressingChosen}
-gaseosa: ${sodaChosen}`)