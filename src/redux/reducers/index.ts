import { PUT_DATA } from "../actions"

const initialState = {
    list: [],
}

export const reducer = (state = initialState, action: any) => {
    if (action.type === PUT_DATA) {
        return {
            ...state, 
            list: action.payload,
        }
    }

    return state;
}