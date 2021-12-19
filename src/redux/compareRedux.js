export const getA = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;
export const getAll = state => {
  return state.compare.products.map(productInCompare =>
    state.products.find(product => product.id === productInCompare.id)
  );
};

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const addProductToCompare = payload => ({ payload, type: ADD_PRODUCT });
export const removeProductFromCompare = payload => ({ payload, type: REMOVE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    default:
      return statePart;
  }
}
