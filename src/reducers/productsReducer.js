import * as types from '../actions/types';

const initialState = {
    products: [],
    fetching: false,
    selectedProduct: null
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.product
            };
        case types.SET_PRODUCTS_LIST:
            return {
                ...state,
                products: action.products
            };
        case types.FETCH_PRODUCTS_LIST_ERROR:
            return {
                ...state,
                fetchError: action.error
            };
        default:
            return state;
    }
}