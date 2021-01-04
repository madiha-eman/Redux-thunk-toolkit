import {configureStore} from '@reduxjs/toolkit';


const Store = configureStore({
    reducer: todoReducer
})

export default Store