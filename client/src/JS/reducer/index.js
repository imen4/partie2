import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {productReducer} from "./produit"
import {commandReducer} from "./command"
const rootReducer = combineReducers({authReducer, productReducer, commandReducer});

export default rootReducer;