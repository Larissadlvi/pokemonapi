const url = ('https://pokeapi.co/api/v2/pokemon/100')

//Pokemon num 1

fetch('https://pokeapi.co/api/v2/pokemon/100')

.then(respuesta => respuesta.json())
.then(pokemon1 => {
    let element = document.getElementById("elemento")
    element.innerHTML = `<p>Name: ${pokemon1.name} <p>
    <img src='${pokemon1.sprites.front_shiny}'><p>Height: ${pokemon1.height}<p>`;
    console.log(pokemon1)
})
.catch(err=>console.log(err))

//Pokemon num 2
fetch('https://pokeapi.co/api/v2/pokemon/5')

.then(respuesta => respuesta.json())
.then(pokemon2 => {
    let element = document.getElementById("elemento2")
    element.innerHTML = `<p>Name: ${pokemon2.name} <p>
    <img src='${pokemon2.sprites.front_shiny}'><p>Height: ${pokemon2.height}<p>`;
    console.log(pokemon2)
})
.catch(err=>console.log(err))

//Pokemon num 3
fetch('https://pokeapi.co/api/v2/pokemon/55')

.then(respuesta => respuesta.json())
.then(pokemon3 => {
    let element = document.getElementById("elemento3")
    element.innerHTML = `<p>Name: ${pokemon3.name} <p>
    <img src='${pokemon3.sprites.front_shiny}'><p>Height: ${pokemon3.height}<p>`;
    console.log(pokemon3)
})
.catch(err=>console.log(err))