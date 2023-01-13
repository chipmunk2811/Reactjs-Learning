import DATA from "../../../Buoi6_7/user-management-redux/data.json"
import { DELETE_USER, EDIT_USER, KEYWORD, SUBMIT } from "./action/constant";


const initialState = {
  userList: DATA,
  keyWord: null,
  editUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      // Tạo userList để không bị tham chiếu để setState
      let userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload);

      if (index !== -1) {
        userList.splice(index, 1);
      }
      state.userList = userList;
      console.log(state)
      return { ...state };
    };

    case SUBMIT: {
      let userList = [...state.userList];
      if (action.payload.id) {
        // updata
        const index = userList.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          userList[index] = action.payload;
        };
        state.userList = userList;
        return { ...state };
      } else {
        // add
        const userNew = { ...action.payload, id: new Date().getTime() };
        state.userList = [...userList, userNew];
      };
      return { ...state };
    };

    case EDIT_USER:
      state.editUser = action.payload;
      return { ...state };

    case KEYWORD:
      state.keyWord = action.payload;
      return { ...state };

    default: return { ...state };
  }
};

export default userReducer;
