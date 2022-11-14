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

export const fetchImages = (query_string) => dispatch => {
  dispatch(setImagesLoading(true));
  api.get(FETCH_IMAGES_BY_QUERY(query_string))
  .then(res => {
    console.log('res', res)
    // let arr = [];

    // res.data.map(item => arr.push(JSON.parse(item[0])))

    // dispatch({
    //   type: SET_IMAGES,
    //   payload: arr
    // });
    dispatch(setImagesLoading(false));
  })
  .catch(e => {
    dispatch(setImagesLoading(false));
    console.log('fetching images error==', e)
  })
};
