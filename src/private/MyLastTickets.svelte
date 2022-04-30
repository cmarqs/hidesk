<script>
    import notes from "../data/tikets";
</script>

{#each notes as note}
    <div class="card mb-3">
    <div class="card-header">{note.currentStatus} - {note.lastUpdate}</div>
    <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">{note.content}</p>
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-danger">Delete</button>
    </div>
    </div>
{/each}