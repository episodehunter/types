export enum WatchedEnum {
  kodiScrobble,
  kodiSync,
  checkIn,
  checkInSeason,
  plexScrobble
}

export interface WatchedEpisode {
  episode: number;
  episodeNumber: number;
  season: number;
  showId: string;
  time: Date;
  type: WatchedEnum;
}

export interface WatchedEpisodeInput extends UnwatchedEpisodeInput {
  time: Date;
}

export interface UnwatchedEpisodeInput {
  showId: string;
  season: number;
  episode: number;
  type?: WatchedEnum;
}
