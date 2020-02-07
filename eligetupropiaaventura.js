const optionToChooseMessage = `\nEscribí 1, 2 o 3 según la opción que elijas.`

const firstChoice = Number(prompt(`Te perdiste en el bosque. Es de noche y hace mucho frío. No sabés para dónde ir. ¿Qué hacés? \n1 - Seguís caminando. \n2 - Buscás un lugar que parezca cómodo para dormir. Aunque tenés frío, no hacés una fogata. \n3 - Hace frío. Prendés un fogata y te dormís al lado.` + optionToChooseMessage))

if (firstChoice === 1) {
    secondChoice = Number(prompt(`Ibas caminando ya 2 horas sin parar cuando te encontrás con una cabaña. Parece abandonada; no hay luces prendidas. Tenés hambre y frío, pero también miedo. ¿Qué hacés? \n1 - Entrás corriendo. Tenés más frío que miedo. \n2 - Tiritando, te acercás a mirar por las ventanas. Persona precavida vale por dos. \n3 - Seguís caminando hacia otra dirección. Tendrás frío, pero el miedo a lo desconocido te gana.` + optionToChooseMessage))

    if (secondChoice === 1) {
        alert(`Aplaudo tu valentía. Lamentablemente, la casa se había convertido en una guarida de pumas. Ni bien te vieron entrar, te atacaron entre 3. Moriste en menos de 1 minuto.`)
    } else if (secondChoice === 2) {
        alert(`Con la poca luz que hay, llegás a entrever movimientos fugaces dentro de la casa. Te vas corriendo, pero en el apuro no ves un árbol caído. Te tropezás y te quebrás una pierna. Estás solx. El tiempo dirá qué será de vos. `)
    } else if (secondChoice === 3) {
        alert(`Exhaustx y muertx de hambre, caminás sin descanso. 5 horas después llegás a una ruta bastante transitada. Un auto frena y te lleva al pueblo más cercano. ¡Qué suerte que te cruzaste con alguien bueno! Vivís para contar otro día.`)
    } else {
        alert(`No ingresaste una opción válida.`)
    }


} else if (firstChoice === 2) {
    secondChoice = Number(prompt(`Encontraste 2 lugares en los que podrías dormir. Una cueva que parece abandonada y un claro en el bosque con pasto verde y mullido. En la cueva no hace tanto frío, pero quizá no esté del todo abandonada. ¿Qué hacés?\n1 - Dormís en la cueva. En tu experiencia, si algo parece abandonado es porque está abandonado. \n2 - Dormís en el claro. Los pastos parecen cómodos y no querés arriesgarte a que te encuentre algún animal en la cueva. \n3 - Dormís en el claro, pero te arrepentís de tu primera opción y al final prendés una fogata.` + optionToChooseMessage))

    if(secondChoice === 1){
        alert(`Mientras dormías, una familia de conejos se te acercó. Durmieron todos acurrucados. Te despertaste abrigado y con energía para seguir tu camino. Después de caminar 3 horas, llegaste a un pueblo. ¡Felicitaciones! Sobreviviste.`)
    } else if (secondChoice === 2) {
        alert(`Los pastos eran cómodos, pero mientras dormías, bajó aún más la temperatura. No pudiste despertarte. Moriste de frío.`)
    } else if (secondChoice === 3) {
        alert(`El fuego te reconforta. Empezás a sentir calor por todo el cuerpo. ¡Ya estás mejor! Pero el fuego atrae a una manada de pumas que andaba cerca. Te atacan sin que te des cuenta. Live fast, die young.`)
    } else {
        alert(`No ingresaste una opción válida.`)
    }
} else if (firstChoice === 3) {
    secondChoice = Number(prompt(`Hace mucho que no llueve en el bosque. Todo está seco. Aunque el cielo parece indicar tormenta. ¿Qué hacés? \n1 - Una fogata pequeña. Seguramente se apague pronto, pero al menos no vas a morir en un incendio forestal. \n2 - Una fogata mediana. Encontraste unos troncos raros en un lugar y creés que te van a servir. \n3 - Si vas a hacerlo, lo hacés bien. Una fogata enorme. Total, parece que va a llover. ` + optionToChooseMessage))

    if(secondChoice === 1){
        alert(`Contra todo pronóstico, tu pequeña fogata se transforma en un enorme incendio forestal cuando las nubes que traían tormenta solo trajeron viento. El viento alimentó a tu fuego y tiró chispas por todos lados. Vos que no querías morir de frío, moriste calcinado.`)
    } else if (secondChoice === 2) {
        alert(`Los troncos que encontraste eran de palo santo. El humo te reconforta, pero en tanta cantidad te hace entrar en un trance. Pasás la noche alucinando. Te despertás en un pueblo. El efecto del humo te hizo caminar hasta tu salvación. ¡Sobreviviste!`)
    } else if (secondChoice === 3) {
        alert(`Te pasaste dos horas juntando todos los troncos y ramitas que podías. Cuando los vas a prender, empieza a llover. ¡Qué suerte para el bosque! Mala suerte para vos. Entre el frío y la lluvia, no tenés chance. Morís abrazado a los troncos que no llegaron a ser fogata.`)
    } else {
        alert(`No ingresaste una opción válida.`)
    }
} else {
    alert(`No ingresaste una opción válida.`)
}