import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        loading:false as boolean,
        
    },
    reducers:{
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const {
    setLoading
} = TaskSlice.actions

export const selectLoading = (state:any) => state.auth.loading

export default TaskSlice.reducer