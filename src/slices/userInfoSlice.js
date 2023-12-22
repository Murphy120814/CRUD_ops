import { createSlice } from "@reduxjs/toolkit";

function privateIdGenerator() {
  let userId = 0;
  function addUserInfoWithId(state, action) {
    if (state.populatedUserId !== null) {
      state.userInfoList = state.userInfoList?.map(
        (userInfo) =>
          userInfo.userId === state.populateUserId && {
            ...action.payload,
            userId: userInfo.userId,
          }
      );
    }
    state.userInfoList.push({ ...action.payload, userId: userId++ });
  }
  return addUserInfoWithId;
}

let addUserInfo = privateIdGenerator();

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfoList: [],
    populatedUserId: null,
    inViewMode: false,
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
    populateUserId: (state, action) => {
      state.populatedUserId = action.payload;
    },
    toggleViewMode: (state, action) => {
      state.inViewMode = action.payload;
    },
  },
});

export const { addInfo, removeUserInfo, populateUserId, toggleViewMode } =
  userInfoSlice.actions;
export default userInfoSlice.reducer;
