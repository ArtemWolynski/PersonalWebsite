import {createReducer, on} from '@ngrx/store';
import {gitError, gitMessageSent, gitSendMessage} from '../actions/get-in-touch.actions';
import {MessageState} from '../../core/models/message-state';

export const initialState: MessageState = {
  message: null,
  success: false,
  errors: [],
};

export const getInTouchReducer = createReducer(
  initialState,
  on(gitSendMessage, (state, { message }) => ( { ...state, message } )),
  on(gitMessageSent, (state, { success } ) => ( { ...state, success } )),
  on(gitError, (state, { errors }) => ( { ...state, errors } )),
)
