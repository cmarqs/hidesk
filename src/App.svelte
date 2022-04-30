<script>
	export let name;

	import TicketForm from './private/TiketForm.svelte'
	import NavBar from './partials/NavBar.svelte';
</script>

<body>

	<header>
		<NavBar />
	</header>

	<div class="container">  
	<main>
		<section class="columns">
			<div class="column is-three-fifths"><TicketForm /></div>
		</section>
		<br>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</main>
  
	<footer>
	  <p>© 2063 Dinos-R-Us</p>
	</footer>

	</div>
</body>
