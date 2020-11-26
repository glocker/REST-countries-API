<script>
	import { onMount } from 'svelte';

	let cards = [];

	onMount(async () => {
		const res = await fetch(`https://restcountries.eu/rest/v2/all`);
		cards = await res.json();
	});
</script>

<style>
	.cards {
		
		display: grid;
		grid-template-columns: repeat(4, 1fr);
        grid-gap: 5vw;
        padding-right: 2%;
    }
    
    figure {
		width: 100%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 5px; 
    }

    .info {
        padding: 2vh;
    }

	img {
		width: 100%;
		margin: 0;
		border-radius: 5px 5px 0 0;
	}

	img {
		height: 60%;
	}

</style>

<div class="cards">
	{#each cards as card}
		<figure>
            <img src={card.flag} alt={card.name}>
            <div class="card-info">
                <div class="card-title">{card.name}</div>
                <div class=""><b>Population: </b>{card.population}</div>
                <div class=""><b>Region: </b>{card.region}</div>
                <div class=""><b>Capital: </b>{card.capital}</div>
            </div>
			
		</figure>
	{:else}
		<!-- this block is rendering till cards.length === 0 -->
		<p>loading ...</p>
	{/each}
</div>