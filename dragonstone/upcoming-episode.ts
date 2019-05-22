import { Episode } from './episode';
import { showId } from '../types';

export interface UpcomingEpisode {
  showId: showId;
  episodes: Episode[];
}
