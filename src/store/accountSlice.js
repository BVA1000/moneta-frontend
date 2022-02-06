import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        value: {
            id: Number,
            fullname: String,
            username: String,
            email: String,
            image: URL,
        },
        
    },
    reducers: {
      createAccount(state, action) {
          state.value = action.payload
        /*const newAccount = action.payload;
        const existingAccount = state.value.find((account) => account.id === newAccount.id);
        if (!existingAccount) {
            state.value.push({
              id: newAccount.id,
              fullname: newAccount.fullname,
              username: newAccount.username,
              email: newAccount.email,
              image: newAccount.image,
              
            });
        }*/
      },
      updateAccount(state, action) {
        state.value = action.payload

      },
      deleteAccount(state, action) {
        state.value = action.payload
      },
    },
  })
  
  
  export const { createAccount, updateAccount, deleteAccount } = accountSlice.actions
  
  export default accountSlice.reducer