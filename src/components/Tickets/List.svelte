<script>
    //properties
    export let ticketData = [];

    //method props
    export let deleteTicket;
    export let editTicket;

    //variables
</script>

{#if ticketData.length > 0}
    <div class="table-responsive">
        <table class="table">
            <caption>Lista de tickets</caption>
            <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Data</th>
                    <th scope="col">Title</th>
                    <th scope="col">Texto</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {#each ticketData as ticket}
                    <tr>
                        <td>{ticket.currentStatus}</td>
                        <td>{ticket.lastUpdate}</td>
                        <td>{ticket.title}</td>
                        <td>{ticket.content}</td>
                        <th scope="row">
                            <button class="btn btn-info" on:click={editTicket(ticket.id)}>Edit</button>
                            <button class="btn btn-danger" on:click={deleteTicket(ticket.id)}>Delete</button>
                        </th>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <p>no tickets</p>
{/if}
