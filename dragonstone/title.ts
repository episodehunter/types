import { showId } from '../types';

export interface Title {
  id: showId;
  name: string;
  followers: number;
  tvdbId: number;
  lastupdated: number;
}
