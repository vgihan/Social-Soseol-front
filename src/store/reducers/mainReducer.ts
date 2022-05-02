/* eslint-disable default-param-last */
import { Action } from '../../types/Action';
import { CLOSE_LOGIN_MODAL } from '../actions/main/closeLoginModal';
import { INIT } from '../actions/main/init';
import { OPEN_LOGIN_MODAL } from '../actions/main/openLoginModal';

const initialState = { isOpenLoginModal: false };

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { ...state, isOpenLoginModal: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, isOpenLoginModal: false };
    case INIT:
      return { ...initialState };
    default:
      return state;
  }
};

export default mainReducer;
