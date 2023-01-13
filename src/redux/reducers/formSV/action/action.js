import { ADDSV, DELETE } from "./constant";

export const actADDSV = (sv) => {
    return {
        type: ADDSV,
        payload: sv,
    };
};

export const actDelete = (maSV) => {
    return {
        type: DELETE,
        payload: maSV,
    };
};