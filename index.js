// Ejercicio 17

let obtenerCompetencia = (a, b) => {
    return `${a} vs. ${b}` 
}

console.log(obtenerCompetencia("Python", "JavaScript"))
console.log(obtenerCompetencia("Coca Cola", "Pepsi"))


// Ejercicio 18

let generarEmail = (email, dominio) => {
    return `${email}@${dominio}`
}

console.log(generarEmail("sofialiendro", "gmail.com"))


// Ejercicio 19

let calcularPuntaje = (facil, normal, dificil) => {
    let cantidadFaciles = facil * 3
    let cantidadNormales = normal * 5
    let cantidadDificiles = dificil * 10
    return cantidadFaciles + cantidadNormales + cantidadDificiles
}

console.log(calcularPuntaje(3, 0, 0))
console.log(calcularPuntaje(0, 2, 1))
console.log(calcularPuntaje(5, 1, 2))