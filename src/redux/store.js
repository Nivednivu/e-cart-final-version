import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import wishlistslice from './slices/wishlistslice'
import cartslise from './slices/cartslise'

const store = configureStore({
    reducer:{
         wishlistreducer:wishlistslice,
         cartReducer:cartslise
    }
}) 
 


export default store
