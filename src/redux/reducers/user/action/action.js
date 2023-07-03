import { DELETE_USER, SUBMIT,EDIT_USER } from "./constant";

export const actDeleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id,
    };
};

export const actSubmit = (user) => {
    return {
        type: SUBMIT,
        payload: user,
    };
};

export const actEditUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user,
    };
};

export const actKeyWord = (keyword) => {
    return {
        type: "KEYWORD",
        payload: keyword,
    };
};