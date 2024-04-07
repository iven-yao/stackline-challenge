import { PayloadAction } from '@reduxjs/toolkit'
import { Product} from '../type/type'
import { PRODUCT } from './constants'

type reducerState = {
    productsData: Product[],
    isLoading: boolean,
    isError: boolean
}

const initialState: reducerState = {
    productsData: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action:PayloadAction<Product[]>) => {
    switch (action.type) {
        case PRODUCT.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case PRODUCT.LOAD_SUCCESS:
            return {
                ...state,
                productsData: action.payload,
                isLoading:false
            };
        default:
            return state;
    }
}