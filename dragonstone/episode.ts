import { episodeId } from '../types';

export interface Episode {
  id: episodeId;
  aired: string;
  episode: number;
  episodeNumber: number;
  lastupdated: number;
  name: string;
  overview?: string;
  season: number;
  tvdbId: number;
}
