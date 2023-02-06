import { SELECTED_DAY } from "./actions.js";

const days = ["월", "화", "수", "목", "금", "토", "일"];
const currentDay = new Date().getDay() - 1 >= 0 ? days[new Date().getDay() - 1] : days[6];

const dayReducer = (state = currentDay, action) => {
    switch (action.type) {
        case SELECTED_DAY:
            return action.payload;
        default:
            return state;
    }
};

export default dayReducer;