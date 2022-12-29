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
        localStorage.setItem("token", user.accessToken);
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
      localStorage.setItem("token", user.accessToken);
    }
    return user;
  } catch (error) {
    console.log(error);
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const res = await authService.logout();
    if (res) {
      localStorage.removeItem("token");
    }
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const res = await authService.checkAuth();
    if (res) {
      localStorage.setItem("token", res.data.accessToken);
    }
    return res.data;
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
  isAuth: false,
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
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuth = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = action.payload.message;
    });

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.status = action.payload.message;
      state.token = action.payload.accessToken;
      state.isAuth = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = action.payload.message;
    });

    // logout
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isAuth = false;
      state.status = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = action.payload.message;
    });

    // check is auth
    builder.addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.status = action.payload.message;
      state.token = action.payload.accessToken;
      state.isAuth = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = action.payload.message;
    });
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.isAuth);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
