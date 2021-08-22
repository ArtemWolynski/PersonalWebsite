import {Message} from './message';

export interface MessageState {
  message: Message;
  errors: Error[];
  success: boolean;
}
