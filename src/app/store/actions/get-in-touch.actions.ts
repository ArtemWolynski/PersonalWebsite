import {createAction, props} from '@ngrx/store';
import {Message} from '../../core/models/message';

export const gitSendMessage = createAction(
  '[Get in touch] Send message',
  props < { message: Message } >()
);

export const gitMessageSent = createAction(
  '[Get in touch] Message sent',
  props < { success: boolean } >()
);

export const gitError = createAction(
  '[Get in touch] Error',
  props < { errors: Error[] } >()
);
