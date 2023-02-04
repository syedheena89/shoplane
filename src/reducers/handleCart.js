import  { createSlice } from "@reduxjs/toolkit";
import  cartData from '../data/cartData.json';
const initialState = [...cartData];

export const handleCart = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addItem : (state,action) => {
            const product = action.payload;
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                  //increase the Quantity
              return state.map((x) => 
                x.id === product.id ? { ...x, qty: x.qty + 1 } : x
              );
            } else {
              const product = action.payload;
              return [...state, 
                  { ...product, 
                      qty: 1,
                   }
                  ]   
               }
        },
     
        deleteItem : (state,action) => {
           // return state.filter(item.id !== action.payload)
           const product = action.payload;
           const exist1 = state.find((x)=>x.id === product.id);
           if(exist1.qty === 1){
            return state.filter((x)=>x.id !== exist1.id)
           } else {
                return state.map((x)=>
                    x.id === product.id ? {...x,qty:x.qty-1} : x
                );
           }
        },    
    }
})

export const {addItem,deleteItem} = handleCart.actions
export default handleCart.reducer
