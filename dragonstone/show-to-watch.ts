import { ShowId } from '../types';
import { Show } from './show';

export interface ShowToWatch {
  showId: ShowId;
  numberOfEpisodesToWatch: number;
  show: Show;
}
