export enum WatchedEnum {
  kodiScrobble = 0,
  kodiSync = 1,
  checkIn = 2,
  checkInSeason = 3,
  plexScrobble = 4
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
