const input = document.getElementById("input")
const btn = document.getElementById("button")
const img = document.getElementById("img")

async function getPoke() {
    const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await api.json()

    let amount = data.count
    for (let i = 0; i < 10; i++) {
        let url = data.results[i].url

        const pokeResponse = await fetch(url)
        const pokeData = await pokeResponse.json()
        console.log(pokeData.name, pokeData.id)
    }
}

async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${(input.value.toLowerCase())}`);
    const pokeData = await response.json()

    img.src = pokeData.sprites.front_default
    console.log(pokeData.name, pokeData.id)

}

// getPokemon("pikachu")
btn.addEventListener("click", getPokemon)
input.addEventListener("submit", (event) => {
    console.log("Hello")
})