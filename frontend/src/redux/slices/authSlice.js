import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (params) => {
    try {
      const { name, email, password } = params;
      const user = await authService.register({
        name,
        email,
        password,
      });
      if (user) {
        window.localStorage.setItem("token", user.token);
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginUser = createAsyncThunk("auth/loginUser", async (params) => {
  try {
    const { email, password } = params;
    const user = await authService.login({ email, password });
    if (user) {
      window.localStorage.setItem("token", user.token);
    }
    return user;
  } catch (error) {
    console.log(error);
  }
});

// interface AuthSliceState {
//     user: {},
//     token: string,
//     isLoading: boolean,
//     status: string
// }

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

// export type AuthArgs = {
//     name: string,
//     email: string,
//     password: string
// }

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.token = action.payload.token;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
