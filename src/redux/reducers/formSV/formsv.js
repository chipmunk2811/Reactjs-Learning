import { ADDSV, DELETE } from "./action/constant";

const initialState = {
    SVList: [{
        maSV: 1,
        hoten: 'Nguyễn Hoàng Triều',
        phone: '0784547282',
        email: 'chipmunk2811@yahoo.com'
    }, {
        maSV: 2,
        hoten: 'Nguyễn Hoàng Triều',
        phone: '0784547282',
        email: 'chipmunk2811@yahoo.com'
    },]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDSV: {
            let SVList = [...state.SVList];
            // add
            const svNew = { ...action.payload };
            state.SVList = [...SVList, svNew];
            return { ...state };
        };
        case DELETE: {
            // Tạo userList để không bị tham chiếu để setState
            let SVList = [...state.SVList];
            const index = SVList.findIndex((sv) => sv.maSV === action.payload);

            if (index !== -1) {
                SVList.splice(index, 1);
            }
            state.SVList = SVList;
            return { ...state };

        }
        default: return { ...state };
    }
};

export default userReducer;
