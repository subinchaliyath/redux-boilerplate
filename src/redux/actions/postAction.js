import axios from 'axios'
import {GET_POST_REQUEST,GET_POST_SUCCESS,GET_POST_FAIL} from '../constants/postConstants'
export const getPhotos = () =>async(dispatch)=> {
    try{
        console.log("action");
        dispatch({
            type:GET_POST_REQUEST
        })
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos/1",
            config
          );
      
          dispatch({
            type: GET_POST_SUCCESS,
            payload: data,
          });
    }
    catch(error){
        dispatch({
            type: GET_POST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}