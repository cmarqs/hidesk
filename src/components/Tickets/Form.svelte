<script>

  export let addTicket;
  
  let formData = {title: "", content: "", id: null};
  
  $: isEmpty = !formData.title || !formData.content;

  function handleSubmit() {
    addTicket(formData);
    formData = {title: "", content: "", id: null};
  }



  let notes = [];

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

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="title">Título</label>
    <input type="text" class="form-control" id="title" placeholder="Título ou assunto" bind:value={formData.title} />
  </div>
  <div class="form-group">
    <label for="content">Descrição</label>
    <textarea class="form-control" id="content" rows="3" placeholder="Descreva os detalhes" bind:value={formData.content} />
  </div>
  <button type="submit" class="btn btn-primary" disabled={isEmpty} >Submeter ticket</button>
</form>
