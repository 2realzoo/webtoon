export const IS_ACTIVE_SEARCH = "IS_ACTIVE_SEARCH";

export const isActiveSearch = (state) => {
    return {
        type: IS_ACTIVE_SEARCH,
        payload : state,
    }
};