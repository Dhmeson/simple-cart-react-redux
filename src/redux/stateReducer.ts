import { createSlice } from '@reduxjs/toolkit'
import {cartItem,cartReducerProps} from './cartTypes'
var CART:cartReducerProps={list:[],totalItems:0,totalToPay:0}

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:CART

  },
  reducers: {
    addItem:(state,action:{payload:cartItem})=>{
      var item_in_cart=false
      state.cart.totalItems+=1
      var sum=parseFloat(state.cart.totalToPay.toFixed(2))+parseFloat(action.payload.value.toFixed(2))
      state.cart.totalToPay=sum
      for (let i = 0; i < state.cart.list.length; i++) {
        if(state.cart.list[i].id===action.payload.id){
          state.cart.list[i].qtd+=1
          item_in_cart=true
          } 
      }
      if(!item_in_cart){
        state.cart.list.push(action.payload)
      }
      
    },
    removeItem:(state,action:{payload:cartItem})=>{
      
      state.cart.totalItems-=1
      var sub=parseFloat(state.cart.totalToPay.toFixed(2))-parseFloat(action.payload.value.toFixed(2))
      state.cart.totalToPay=sub
      for (let i = 0; i < state.cart.list.length; i++) {
        if(state.cart.list[i].id===action.payload.id && state.cart.list[i].qtd>0){
            state.cart.list[i].qtd-=1
          return
          }
        else if(state.cart.list[i].id===action.payload.id && state.cart.list[i].qtd===0){
          var newCarlist=state.cart.list.filter((item:cartItem)=>{
            return item.id!==state.cart.list[i].id
          })
          console.log(newCarlist)
          state.cart.list=newCarlist

        }
      }    

    },
  },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem } = counterSlice.actions

export default counterSlice.reducer