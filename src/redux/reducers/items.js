import { initialState } from "../../data/initialState";
import { ITEMS_ARE_LOADING, ITEMS_FETCH_DATA_SUCCESS, ITEMS_HAVE_ERROR } from "../../enums/action";

export const  itemsHaveError = (state = false, action) => {

    switch (action.type) {
        case ITEMS_HAVE_ERROR:
            return action.payload;

        default:
            return state;
    }
}

export const itemsAreLoading = (state = false, action) => {
    switch (action.type) {
        case ITEMS_ARE_LOADING:
            return action.payload;

        default:
            return state;
    }
}

export const items = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
