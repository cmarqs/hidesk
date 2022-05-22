import moment from 'moment';
import { writable, derived } from 'svelte/store';
import localCards from "../cards-data";
import localLists from "../lists-data";


const store = writable([...localCards]);


export const openedCards = derived(store, $opened => {
    //return $opened.filter(t => t.currentStatus === 1);
    let openedColumn = localLists.find(x => x.id = "627ac4e8b9f819720d85a3dc"); //opened
    let data = $opened.filter(x => x.idList === openedColumn.id);
    console.log(data);
    return data.map(i => {
        return {
            ...i,
            title: i.name,
            content: i.desc,
            currentStatus: openedColumn.name,
            lastUpdate: moment(i.dateLastActivity).calendar()
        }
    })
});

export default store;