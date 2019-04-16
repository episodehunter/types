import { Show } from '../../dragonstone/show';
import { ShowInput } from './show-input';

export interface Event {
  showId: string;
  showInput: ShowInput;
  requestStack: string[];
}

export type Response = Show | null;
