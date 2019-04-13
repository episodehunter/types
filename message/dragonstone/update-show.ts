import { Show } from '../../dragonstone/show';
import { ShowInput } from './show-input';

export interface Event {
  showId: string;
  showInput: ShowInput;
}

export type Response = Promise<Show | null>;
