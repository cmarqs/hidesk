<script>
  export let saveTicket;

  export let formData = { title: "", content: "", id: null };

  $: isEmpty = !formData.title || !formData.content;

  function handleSubmit() {
    saveTicket(formData);

    cancel();
  }

  function cancel(){
    formData = { title: "", content: "", id: null };
  }

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
  <button type="submit" class="btn btn-primary" disabled={isEmpty}>Submeter ticket</button>
  <button type="submit" class="btn btn-secondary" disabled={isEmpty} on:click={cancel} >Cancelar</button>
</form>
