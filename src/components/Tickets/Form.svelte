<script>
  import tikets from "../../data/stores/Tickets";
  console.log();

  let formData = {
    title: "",
    content: "",
    id: null,
  };
  let notes = tikets;

  //#region methods

  let saveTicket = () => {
    const newTicket = {
      id: notes.length + 1,
      title: formData.title,
      content: formData.content,
    };
    notes = notes.concat(newTicket);

    formData = {
      id: null,
      title: "",
      content: "",
    };
    console.log(notes);
  };

  let isEdit = false;
  let editTicket = (note) => {
    isEdit = true;
    formData = note;
  };

  let updateTicket = () => {
    isEdit = !isEdit;
    let noteDB = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      id: formData.id,
    };
    let objIndex = notes.findIndex((obj) => obj.id == noteDB.id);
    console.log("Before update: ", notes[objIndex]);
    notes[objIndex] = noteDB;
    formData = {
      id: null,
      title: "",
      category: "",
      content: "",
    };
  };
  


  //#endregion
</script>

<form>
  <div class="form-group">
    <label for="title">Título</label>
    <input
      type="text"
      class="form-control"
      id="title"
      placeholder="Título ou assunto"
      bind:value={formData.title}
    />
  </div>
  <div class="form-group">
    <label for="content">Descrição</label>
    <textarea
      class="form-control"
      id="content"
      rows="3"
      placeholder="Descreva os detalhes"
      bind:value={formData.content}
    />
  </div>
  <button
    type="submit"
    class="btn btn-primary"
    on:click|preventDefault={saveTicket}>Submeter ticket</button
  >
</form>
