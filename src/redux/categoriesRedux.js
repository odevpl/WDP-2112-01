/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getActive = ({ categories }) => {
  const activeCategoryObject = categories.find(category => category.active);
  return activeCategoryObject ? activeCategoryObject.id : '';
};

// action name creator
const reducerName = 'categories';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_ACTIVE_CATEGORY = createActionName('CHANGE_ACTIVE_CATEGORY');

// action creators
export const createActionChangeActiveCategory = payload => ({
  payload,
  type: CHANGE_ACTIVE_CATEGORY,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_ACTIVE_CATEGORY: {
      return statePart.map(category =>
        category.id === action.payload
          ? { ...category, active: true }
          : { ...category, active: false }
      );
    }
    default:
      return statePart;
  }
}
