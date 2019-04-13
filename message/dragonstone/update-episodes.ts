export interface UpdateEpisodesEvent {
  showId: string;
  firstEpisode: number; // episodenumber
  lastEpisode: number; // episodenumber
  episodes: EpisodeInput[];
}

export type UpdateEpisodesResponse = Promise<Boolean>;

export interface EpisodeInput {
  tvdbId: number;
  name: string;
  season: number;
  episode: number;
  firstAired: string;
  overview?: string;
  lastupdated: number;
}
