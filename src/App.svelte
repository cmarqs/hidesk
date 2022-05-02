<script>
  import ticketStore, { openedTickets } from "./data/stores/Tickets";

  //components
  import TicketForm from "./components/Tickets/Form.svelte";
  import MyLastTickets from "./components/Tickets/List.svelte";

  //variables
  let allTickets = $ticketStore;
  let ticketData = $openedTickets;
  let formData = {};

  //functions
  const deleteTicket = (id) => {
    allTickets = allTickets.filter((tkt) => tkt.id !== id);
  };

  const saveTicket = ({ title, content }) => {
    let tkt = { id: 3, title, content, history: [{ id: 6, updatedAt: Date.now(), userId: 2, statusId: 1, comment: "Ticket opened" }] };
    allTickets = [tkt, ...allTickets];
  };

  const editTicket = (id) => {
    console.log(`Edit ticket ${id}`);

    let data = allTickets.find(tkt => tkt.id === id);

    formData = {data};
  };
</script>

<section>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Abrir novo ticket</h5>
            <TicketForm {saveTicket} formData={formData} />
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
