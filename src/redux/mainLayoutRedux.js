/* selectors */
export const getAllModes = ({ renderingModes }) => renderingModes;
export const getCurrentMode = ({ currentRenderingMode }) => currentRenderingMode;

// action name creator
const createActionName = (name, reducerName) => `app/${reducerName}/${name}`;

// action types
export const SET_NEW_RENDERING_MODE = createActionName(
  'SET_NEW_RENDERING_MODE',
  'currentRenderingMode'
);

// action creators
export const createActionSetNewRenderingMode = payload => ({
  payload,
  type: SET_NEW_RENDERING_MODE,
});

/* reducers */
export function currentRenderingModeReducer(statePart = {}, action = {}) {
  switch (action.type) {
    case SET_NEW_RENDERING_MODE: {
      return {
        ...action.payload,
      };
    }
    default:
      return statePart;
  }
}

export function renderingModesReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
