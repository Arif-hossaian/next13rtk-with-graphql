
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    isAuth: false,
    phnNum: '',
    password:''
  }
} as any

export const auth = createSlice({
  name:'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    login: (state, action:any) => {
      return {
        value: {
          isAuth: true,
          phnNum: action.payload,
          passwrod: action.payload
        }
      }
    }
  }
})

export const {logOut, login} = auth.actions
export default auth.reducer