import { SAVE_TOKEN } from "./authTypes";

const initialAuthState = {
  token: ''
};
  
const authReducer = (authState = initialAuthState, action) => {  
  switch (action.type){
    
      case SAVE_TOKEN:
        return {
              ...authState,
              token: action.payload.token
            }
      default: 
        return authState;
    }
  }

export default authReducer;
