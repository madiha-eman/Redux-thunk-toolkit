import {createSlice} from '@reduxjs/toolkit';

export const TodoSlice =createSlice({
    name='todo',
    initialState:{
        posts: []
    },
 
        
    extraReducers:{
        
    }

})

export const {}= TodoSlice.actions;
 const Reducer = TodoSlice.reducer
  export default Reducer