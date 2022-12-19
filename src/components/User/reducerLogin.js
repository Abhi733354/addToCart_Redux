import { Constants } from "../../redux/constants";
const initialObject = {};
export const reducerLogin = (state = initialObject,  action) => {
     const {type, payload} = action;
     switch(type) {
         case Constants.SET_LOGIN_DATA:
            return {
                ...state, logindataRedux: payload
            }
            case Constants.SET_LOGOUT:
                return initialObject;
            case Constants.SET_URL:
                return {
                    ...state, currenturl: payload
                }
                default:
                    return state
} 
}
