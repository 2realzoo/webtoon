import { FILTER_DATA } from "./actions";
import { webtoons } from "../repository/webtoons";

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