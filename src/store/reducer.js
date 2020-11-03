import * as actionTypes from './action';

const initialState = {
  ingrediants: {
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0
  },
  priceTotal: 4,
  purchasing: true
}

const price = {
  meat: 2.1,
  bacon: 3,
  salad: 1,
  cheese: 1.5
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        priceTotal : state.priceTotal + price[action.ingredientName],
        ingrediants: {
          ...state.ingrediants,
          [action.ingredientName]: state.ingrediants[action.ingredientName] + 1
        },
        purchasing : state.priceTotal + price[action.ingredientName] <= 4
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        priceTotal : state.priceTotal - price[action.ingredientName],
        ingrediants: {
          ...state.ingrediants,
          [action.ingredientName]: state.ingrediants[action.ingredientName] - 1,    
        },
        purchasing : state.priceTotal - price[action.ingredientName] <= 4
      }
    default:
      return state;
  }
}

export default reducer;