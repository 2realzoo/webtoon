export const USER_INFORMATION = "USER_INFORMATION";

export const userInformation = (user) => {
    return {
        type: USER_INFORMATION,
        payload: user
    }
};