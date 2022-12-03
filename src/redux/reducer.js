import { combineReducers } from 'redux';
import { reducerLogin } from '../components/user/reducerLogin';
import { reducerBook } from '../components/Restaurant/reducerFood';
const reducers = combineReducers({
    login: reducerLogin,
    cart: reducerBook,
})

export default reducers;