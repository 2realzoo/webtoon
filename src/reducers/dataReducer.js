import { FILTER_DATA } from "./actions";

const initialState = [];

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default dataReducer;