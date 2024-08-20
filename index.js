document.addEventListener('DOMContentLoaded', () => {
    let pokemonContainer = document.querySelector('#pokemon_card_container');
    let search = document.querySelector('#search');
    let filterbtn = document.querySelector('#filter');
    let type = document.getElementById("type");

    async function fetchPokemon(i) {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let result = await data.json();
        return result;
    }

    async function fetchAllPokemon() {
        for (let i = 1; i <= 100; i++) { // Limit to 100 for testing
            let pokemon = await fetchPokemon(i);
            let card = createCard(pokemon);
            pokemonContainer.appendChild(card);
        }
    }

    function createCard(pokemon) {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-front">
                <div class="id">${pokemon.id}</div>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
                <div class="name">${pokemon.name}</div>
                <div class="type">${pokemon.types[0].type.name}</div>
            </div>
            <div class="card-face card-back">
                <img src="${pokemon.sprites.back_default}" alt="${pokemon.name}" />
                <div class="name">${pokemon.name}</div>
                <div class="type">${pokemon.abilities[0].ability.name}</div>
            </div>
        </div>
        `;

        return card;
    }

    filterbtn.addEventListener('click', function() {
        let allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            let cardType = card.querySelector('.card-front .type').textContent;
            if (cardType === type.value || type.value === 'Choose a category') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    search.addEventListener('keyup', () => {
        let searchValue = search.value.toLowerCase();
        let allCards = document.querySelectorAll(".card");
        allCards.forEach(card => {
            let cardName = card.querySelector(".card-front .name").textContent.toLowerCase();
            if (cardName.startsWith(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    fetchAllPokemon();
});















































// Nested callbacks leading to callback hell



//Creating Promises:




























