/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_FAVOURITE = createActionName('CHANGE_FAVOURITE');
export const SET_RATING = createActionName('SET_RATING');

// action creators
export const createActionChangeFavourite = payload => ({
  payload,
  type: CHANGE_FAVOURITE,
});
export const setRating = payload => ({
  payload,
  type: SET_RATING,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVOURITE: {
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, heart: action.payload.heart }
          : { ...product }
      );
    }
    case SET_RATING:
      return statePart.map(rating => {
        if (rating.id !== action.payload.id) {
          return rating;
        }
        return {
          ...rating,
          userRating: action.payload.userRating,
        };
      });
    default:
      return statePart;
  }
}
