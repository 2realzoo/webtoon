export const IS_ACTIVE_SEARCH = "IS_ACTIVE_SEARCH";
export const FILTER_DATA = "FILTER_DATA";
export const SELECTED_DAY = "SELECTED_DAY";

export const isActiveSearch = (state) => {
    return {
        type: IS_ACTIVE_SEARCH,
        payload: state,
    }
};

export const filterData = (data) => {
    return {
        type: FILTER_DATA,
        payload: data,
    }
};

export const selectedDay = (day) => {
    return {
        type: SELECTED_DAY,
        payload: day,
    }
}