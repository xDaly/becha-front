import { Action } from '@ngrx/store';


export interface storeInterface {
    counter: Counter;
}

interface Counter {
    n: number;
}

let initialState = {
    n: 0
};

export function counterReducer(state = initialState, action: Action):Counter {
    switch (action.type) {
        case 'increpent':
            return {
                n: state.n + 1
            }
        case 'decrement':
            return {
                n: state.n - 1
            }
        default:
            return state;
    }
}