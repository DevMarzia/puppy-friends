import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// simulo l'autenticazione
const fakeUsers = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "user" },
];
// Thunk login
export const fakeLogin = createAsyncThunk(
  "auth/fakeLogin",
  async ({ email, password }, { rejectWithValue }) => {
    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      return rejectWithValue("Email o password non validi");
    }
  }
);

// Thunk logout
export const fakeLogout = createAsyncThunk("auth/fakeLogout", async () => {
  localStorage.removeItem("user");
});

const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fakeLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fakeLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fakeLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fakeLogout.fulfilled, (state) => {
        state.user = null;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
