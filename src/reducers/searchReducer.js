import { IS_ACTIVE_SEARCH } from "./actions"

const initialState = false;

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_ACTIVE_SEARCH:
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;