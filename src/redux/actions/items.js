import axios from 'axios';

import { 
    ITEMS_HAVE_ERROR,
    ITEMS_ARE_LOADING,
    ITEMS_FETCH_DATA_SUCCESS
} from '../../enums/action';
import { getFormattedData } from '../../pages/swagger-petstore/helper';

export const itemsHaveError = (bool) => {
    return ({
        type: ITEMS_HAVE_ERROR,
        payload: bool
    });
}

export const itemsAreLoading = (bool) =>  {
    return ({
        type: ITEMS_ARE_LOADING,
        payload: bool
    });
}

export const itemsFetchDataSuccess = (items) => {
 
    return ({
        type: ITEMS_FETCH_DATA_SUCCESS,
        payload: items
    });
}

export const itemsFetchData = (url) => (dispatch) => {
        dispatch(itemsAreLoading(true));
       
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => { 
                const formattedData = getFormattedData(response.data);     
            
                dispatch(itemsFetchDataSuccess(formattedData))
            })
            .catch((e) => {
                dispatch(itemsHaveError(true));
                console.log(e);
            });
    };