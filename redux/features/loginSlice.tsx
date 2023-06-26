
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    phnNum: '',
    password:''
} as any

export const auth = createSlice({
  name:'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{phnNum: string, password: string}>) => {
      return {
          isAuth: true,
          phnNum: action.payload.phnNum,
          password: action.payload.password
      }
    }
  }
})

export const {login} = auth.actions
export default auth.reducer