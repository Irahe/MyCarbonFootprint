import { createStore, bindActionCreators } from 'redux';
import * as fpActions from './actions';

import fpReducer from './reducer';

export const fpStore = createStore(fpReducer);

export const MapDispatch = (dispatch) =>
  bindActionCreators(fpActions, dispatch);

export default fpStore;
