<script>
    //properties
    export let ticketData = [];

    //method props
    export let deleteTicket;
    export let editTicket;

    //variables
</script>

{#if ticketData.length > 0}
    {#each ticketData as ticket}
        <div class="card mb-3">
            <div class="card-header">
                {ticket.currentStatus} - {ticket.lastUpdate}
            </div>
            <div class="card-body">
                <h5 class="card-title">{ticket.title}</h5>
                <p class="card-text">{ticket.content}</p>
                <button class="btn btn-info" on:click={editTicket(ticket.id)}>Edit</button>
                <button class="btn btn-danger" on:click={deleteTicket(ticket.id)}>Delete</button>
            </div>
        </div>
    {/each}
{:else}
    <p>no tickets</p>
{/if}
