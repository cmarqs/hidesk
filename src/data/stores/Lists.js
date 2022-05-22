import { writable } from 'svelte/store';

import lists from '../lists-data';

const store = writable([...lists]);

export default store;