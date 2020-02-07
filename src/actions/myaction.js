import * as types from "../lib/actionTypes";
import Axios from "axios";



// Get Items
const getItemsStarted = () => ({
    type: types.GET_ITEMS_STARTED
  });
  
  const getItemsSucceeded = data => ({
        type: types.GET_ITEMS_SUCCEEDED,
        payload: data
    
  });
  
  const getItemsFailed = error => ({
    type: types.GET_ITEMS_FAILED,
    payload: error,
    error: true
  });





export const anotherName=()=>{
    console.log("anotherName");
    
    return dispatch => {
        dispatch(getItemsStarted());
        const url = "https://jsonplaceholder.typicode.com/posts";
        Axios.get(`${url}`)
        .then(function (response) 
        {
            console.log("anotherName"+response.data);
            dispatch(getItemsSucceeded(response.data));
            
          })
          .catch(function (error) 
          {
            dispatch(getItemsFailed(error));
          });
      };
}


export const addWish=(data)=>{
    console.log("addwish");
  
        return {
            type:types.ADD_WISH,
            payload: data
        }
    }

