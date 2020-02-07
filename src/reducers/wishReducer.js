import * as types from "../lib/actionTypes";

const iState = {
                 wish:['LIST1','LIST2']
                }


const wishReducer=(state=iState, action)=>{
    console.log("wishReducer");
    switch (action.type) 
    {
        case types.ADD_WISH:
            {
                return {
                    ...state, 
                    wish: action.payload
                }
            }
     
       default:
        return state;
    }
}
export default wishReducer;