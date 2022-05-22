<script>
  import cardStore, { openedCards } from "./data/stores/Cards";

  //components
  import TicketForm from "./components/Tickets/Form.svelte";
  import MyLastTickets from "./components/Tickets/List.svelte";
  import NavBar from "./components/NavBar.svelte";

  //variables
  let cardData = $openedCards;
  let formData = {};

  //functions

  const deleteTicket = (id) => {
    cardData = cardData.filter((tkt) => tkt.id !== id);
  };

  const saveTicket = (data) => {
    let { id, title, content } = data;
    let tkt;
    if (!!id) {
      //edit card
      tkt = { id: data.id, title, content, history: [{ id: null, updatedAt: Date.now(), userId: 2, statusId: 1, comment: "Ticket opened" }] };
      cardData = cardData.map((tkt) => {
        return tkt.id === formData.id ? { ...tkt, title, content } : { ...tkt };
      });
    } else {
      //new card
      tkt = { id: data.id, title, content, history: [{ id: null, updatedAt: Date.now(), userId: 2, statusId: 1, comment: "Ticket opened" }] };
      cardData = [tkt, ...cardData];
    }
  };

  const setModifiedTicket = (id) => {
    formData = cardData.find((tkt) => tkt.id === id);
  };
</script>

<NavBar />
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
      </div>      
    </div>
    
    <div class="row mt-5">
      <div class="col-lg-12">
        <MyLastTickets ticketData={cardData} {deleteTicket} editTicket={setModifiedTicket} />
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
