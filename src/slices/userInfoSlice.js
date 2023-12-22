import { createSlice } from "@reduxjs/toolkit";

function privateIdGenerator() {
  let userId = 0;
  function addUserInfoWithId(state, action) {
    state.userInfoList.push({ ...action.payload, userId: userId++ });
  }
  return addUserInfoWithId;
}

let addUserInfo = privateIdGenerator();

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfoList: [],
  },
  reducers: {
    addInfo: addUserInfo,
    removeUserInfo: (state, action) => {
      console.log(state);
      const updatedList = state.userInfoList.filter(
        (userInfo) => userInfo.userId !== action.payload
      );
      state.userInfoList = [...updatedList];
    },
  },
});

export const { addInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
