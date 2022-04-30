<script>

	import TicketForm from './private/TiketForm.svelte'
	import MyLastTickets from './private/MyLastTickets.svelte';
	import NavBar from './partials/NavBar.svelte';

</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  * {
    font-family: "Nunito", sans-serif;
  }
</style>
<section>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Abrir novo ticket</h5>
				<TicketForm />
          </div>
        </div>
      </div>
      <div class="col-md-6">
		<MyLastTickets />
      </div>
    </div>
  </div>
</section>