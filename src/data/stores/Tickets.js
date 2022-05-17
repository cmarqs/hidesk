import { writable, derived } from 'svelte/store';
import localTickets from "../../data/tikets-data";


const store = writable(flattenObjects([...localTickets]));


//flatten objects to return simple list of tickets
function flattenObjects (data) {
    return data.map(ticket => {
        let currentStatus = ticket.history[ticket.history.length - 1].statusId;
        let lastUpdate = ticket.history[ticket.history.length - 1].updatedAt;
        let lastOperatorUpdated = ticket.history[ticket.history.length - 1].userId;

        return { ...ticket, currentStatus, lastUpdate, lastOperatorUpdated };
    });
};

export const openedTickets = derived(store, $opened => {
    return $opened.filter(t => t.currentStatus === 1);
});

export default store;