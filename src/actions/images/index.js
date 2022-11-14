import { api } from '@services';
import { 
  SET_IMAGES,
  SET_IMAGES_LOADING,
  FETCH_IMAGES_BY_QUERY
} from '@utils';

export const setImagesLoading = bool => {
	return {
		type: SET_IMAGES_LOADING,
		payload: bool,
	}
};

export const fetchImages = (query_string, page = 1) => dispatch => {
  dispatch(setImagesLoading(true));
  api.get(FETCH_IMAGES_BY_QUERY(query_string, page))
  .then(res => {
    dispatch({
      type: SET_IMAGES,
      payload: res.data.hits,
      is_new_list: page == 1,
    });
    dispatch(setImagesLoading(false));
  })
  .catch(e => {
    dispatch(setImagesLoading(false));
    console.log('fetching images error==', e)
  })
};
