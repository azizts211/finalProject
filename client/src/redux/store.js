import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

// Apply middleware and Redux DevTools Extension together
const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducer, /* initialState, */ composedEnhancers);