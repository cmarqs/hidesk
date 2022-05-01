<script>
  import ticketStore, { openedTickets } from "./data/stores/Tickets";

  //components
  import TicketForm from "./components/Tickets/Form.svelte";
  import MyLastTickets from "./components/Tickets/List.svelte";

  //variables
  let allTickets = $ticketStore;
  let ticketData = $openedTickets;

  //functions
  let deleteTicket = (id) => {
    console.log(`Delete ticket ${id}`);

    allTickets = allTickets.filter((tkt) => tkt.id !== id);
  };

  let editTicket = (id) => {
    console.log(`Edit ticket ${id}`);

  }
</script>

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
        <MyLastTickets ticketData={allTickets} {deleteTicket} {editTicket} />
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  * {
    font-family: "Nunito", sans-serif;
  }
</style>
