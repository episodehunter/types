export interface Event {
  showId: string;
  firstEpisode: number; // episodenumber
  lastEpisode: number; // episodenumber
  episodes: EpisodeInput[];
  requestStack: string[];
}

export type Response = Boolean;

export interface EpisodeInput {
  tvdbId: number;
  name: string;
  season: number;
  episode: number;
  firstAired: string;
  overview?: string;
  lastupdated: number;
}
