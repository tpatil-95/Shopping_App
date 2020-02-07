import * as types from "../lib/actionTypes";

const iState =
 {
    items: []
 }
const nameReducer=(state=iState,action)=>
{
    console.log("NameReducer");

    switch (action.type) 
    {
    case types.GET_ITEMS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ITEMS_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case types.GET_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

      default:
        return state;
    }

}

export default nameReducer;