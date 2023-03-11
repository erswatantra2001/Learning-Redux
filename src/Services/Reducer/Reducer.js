import { ADD_TO_CART } from "../Constants";

const intitalState = {
  cardData: [],
};

export default function cardItems(state = intitalState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
      break;
    default:
      return state;
  }
}
