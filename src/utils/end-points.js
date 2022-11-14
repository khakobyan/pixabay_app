import { PIXABAY_API_KEY } from '@env'

export const FETCH_IMAGES_BY_QUERY = (query_string) => `api?key=${PIXABAY_API_KEY}&q=${query_string}`;
