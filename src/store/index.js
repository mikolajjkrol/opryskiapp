import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: true,
        page: 'home',
        popup: false,
        error: false,
        success: false,
    },
    reducers: {
        toggleTheme(state){
            state.theme = !state.theme
        },
        setPage(state, action){
            state.page = action.payload
        },
        togglePopup(state){
            state.popup = !state.popup
        }, toggleError(state) {
            state.error = !state.error
        }, toggleSent(state) {
            state.success = !state.success
        }
    }
})

const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        swapData(state, action){
            return action.payload
        }
    }
})

export const uiActions = uiSlice.actions
export const dataActions = dataSlice.actions

export const store = configureStore({reducer: {ui: uiSlice.reducer, data: dataSlice.reducer}})