import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { rooReducer } from "./reducers/rootReducer";

const middleware=[thunk];
const initialState = {};

export const store = createStore(rooReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
