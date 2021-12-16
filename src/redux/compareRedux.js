/* selectors */
export const getAllToCompare = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;

/* ACTIONS */

// action name creator
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const ADD_COMPARE = createActionName('ADD_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

// action creators
export const addProductToCompare = payload => ({ payload, type: ADD_COMPARE });
export const removeProductFromCompare = payload => ({ payload, type: REMOVE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COMPARE: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_COMPARE: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    default:
      return statePart;
  }
}
