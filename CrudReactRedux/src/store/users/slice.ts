import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User {
    id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            github: "johndoe",
          },
          {
            id: "2",
            name: "Harold Clavijo",
            email: "andresharold2@gmail.com",
            github: "HClavijo98",
          },
          {
            id: "3",
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            github: "alicejohnson",
          },
];

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");

  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addNewUser: (state, action: PayloadAction<User>) => {
        const id = crypto.randomUUID()
        return [...state, { id, ...action.payload }]
      },
      deleteUserById: (state, action: PayloadAction<UserId>) => {
        const id = action.payload;
        return state.filter((user) => user.id !== id);
      },
      rollbackUser: (state, action: PayloadAction<UserWithId>) => {
        const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
        if(!isUserAlreadyDefined) {
          return [ ...state, action.payload ]
        }
      }
    },
});

export default usersSlice.reducer
export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions