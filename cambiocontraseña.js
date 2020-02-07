// Cambio de contraseña

// Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.

const question1 = `¿Cuál fue el nombre de tu primera mascota?`;
const answer1 = `Brisa`;
 
const question2 = `¿Dónde nació tu mamá?`;
const answer2 = `Guatrache`;
 
const question3 = `¿Cuál es tu color preferido?`;
const answer3 = `violeta`;

const changePassword = confirm(`¿Quiere cambiar la contraseña?`)

if (changePassword) {
    userAnswer1 = prompt(question1)
    userAnswer2 = prompt(question2)
    userAnswer3 = prompt(question3)

    correctAnswers = (userAnswer1 === answer1) && (userAnswer2 === answer2) && (userAnswer3 === answer3);

    if(correctAnswers) {
        newPassword = prompt(`Ingrese la nueva contraseña:`)
        alert(`Su contraseña fue cambiada.`)
    } else {
        alert(`No respondió correctamente todas las preguntas.`)
    }
}