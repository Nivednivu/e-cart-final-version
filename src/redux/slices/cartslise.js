import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
    addTocart:(state,action)=>{
        state.push(action.payload)
    },
    removeFromecart:(state,action)=>{
     return   state.filter(item=>item.id!=action.payload)
    },
    emptycart : (state)=>{
     return state = []
    }
    }
})
export const {addTocart,removeFromecart,emptycart}= cartslice.actions
export default cartslice.reducer