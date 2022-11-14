import { SET_IMAGES, SET_IMAGES_LOADING } from '@utils';

const INITIAL_STATE = {
  images: [],
  loading: false
};
  
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case SET_IMAGES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
