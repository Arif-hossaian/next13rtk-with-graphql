import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type User = {
  username: string;
  password: string;
};

type LoginState = {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: LoginState = {
  user: null,
  status: 'idle',
  error: null
};

export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async (user: User) => {
    const response = await new Promise<User>((resolve) =>
      setTimeout(() => resolve(user), 500)
    );
    return response;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Failed to login';
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
