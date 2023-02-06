import { FILTER_DATA } from "./actions.js";
import { webtoons } from "../repository/webtoons.js";

const initialState = webtoons;

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default dataReducer;