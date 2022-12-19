import { combineReducers } from 'redux';
import { reducerLogin} from '../components/User/reducerLogin';
import { reducerBook } from '../components/books/reducerBook';
const reducers = combineReducers({
    login: reducerLogin,
    cart: reducerBook,
})

export default reducers;