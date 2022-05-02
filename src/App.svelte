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

  const saveTicket = (data) => {
    let { id, title, content } = data;
    let tkt;
    if (!!id) {
      tkt = { id: data.id, title, content, history: [{ id: null, updatedAt: Date.now(), userId: 2, statusId: 1, comment: "Ticket opened" }] };
      allTickets = allTickets.map((tkt) => {
        return tkt.id === formData.id ? { ...tkt, title, content } : { ...tkt };
      });
    } else {
      tkt = { id: data.id, title, content, history: [{ id: null, updatedAt: Date.now(), userId: 2, statusId: 1, comment: "Ticket opened" }] };
      allTickets = [tkt, ...allTickets];
    }
  };

  const setModifiedTicket = (id) => {
    formData = allTickets.find((tkt) => tkt.id === id);
  };
</script>

<section>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Abrir novo ticket</h5>
            <TicketForm {saveTicket} {formData} />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <MyLastTickets ticketData={allTickets} {deleteTicket} editTicket={setModifiedTicket} />
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
