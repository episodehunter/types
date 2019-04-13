import { Show } from '../../dragonstone/show';
import { ShowInput } from './show-input';

export interface AddShowEvent {
  showInput: ShowInput;
}

export type AddShowResponse = Promise<Show>;
