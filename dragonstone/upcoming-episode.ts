import { Episode } from './episode';
import { ShowId } from '../types';

export interface UpcomingEpisode {
  showId: ShowId;
  episodes: Episode[];
}
