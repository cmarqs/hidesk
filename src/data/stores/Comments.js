import { writable } from 'svelte/store';

import comments from '../comments-data';


const store = writable(flattenObjects([...comments]));


//flatten objects to return simple list of tickets
function flattenObjects (data) {
    return data.map(comment => {
        return [{            text: comment.data.text,
            idCard: comment.card.id,
            updatedAt: comment.date,
            updatedBy: comment.memberCreator.fullName,
            updatedByAvatar: comment.memberCreator.avatarUrl,
        }]
    });
};


export default store;