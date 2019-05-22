import { Show } from '../../dragonstone/show';
import { ShowInput } from './show-input';
import { showId } from '../../types';

export interface Event {
  showId: showId;
  showInput: ShowInput;
  requestStack: string[];
}

export type Response = Show | null;
