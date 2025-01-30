import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-autenticated', //'not-autenticated', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    
    checkingCredencials: (state) => {
      state.status = 'checking';
    }, 
  },
})

export const {login, logout, checkingCredencials} = authSlice.actions;