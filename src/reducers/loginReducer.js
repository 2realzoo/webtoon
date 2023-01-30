import { USER_INFORMATION } from "./actions"

const initialState = [{
    id: 0,
    userId: '',
    password: '',
}];

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFORMATION:
            return action.payload;
        default:
            return state;
    }
};

export default loginReducer;