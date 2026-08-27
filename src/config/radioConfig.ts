export interface RadioTrack {
  id: string;
  title: string;
  artist: string;
  genre: "Lo-Fi" | "Synthwave" | "Chiptune" | "Ambient" | "YouTube";
  url: string;
  duration?: string;
  type?: "mp3" | "youtube";
  youtubeId?: string;
  isCustom?: boolean;
}

export interface RadioConfig {
  defaultVolume: number; // 0.0 to 1.0
  autoPlay: boolean;
  tracks: RadioTrack[];
}

export const RADIO_PLAYLIST: RadioTrack[] = [
  {
    id: "track-1",
    title: "Midnight Terminal",
    artist: "RetroWave Audio",
    genre: "Lo-Fi",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
    duration: "2:27",
  },
  {
    id: "track-2",
    title: "8-Bit Cyber Arcade",
    artist: "Chiptune Collective",
    genre: "Chiptune",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=game-8-bit-arcade-138828.mp3",
    duration: "1:45",
  },
  {
    id: "track-3",
    title: "Neon Rain City",
    artist: "Synthwave Pulse",
    genre: "Synthwave",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=synthwave-80s-110045.mp3",
    duration: "2:05",
  },
  {
    id: "track-4",
    title: "Tokyo Coffee Shop",
    artist: "ChillHop Beats",
    genre: "Lo-Fi",
    url: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=chill-abstract-intention-12099.mp3",
    duration: "2:08",
  },
  {
    id: "track-5",
    title: "Quantum Drift",
    artist: "Pixel Dreams",
    genre: "Ambient",
    url: "https://cdn.pixabay.com/download/audio/2022/01/21/audio_31743c5885.mp3?filename=ambient-piano-amp-strings-10711.mp3",
    duration: "2:14",
  },
];

export const RADIO_CONFIG: RadioConfig = {
  defaultVolume: 0.65,
  autoPlay: false,
  tracks: RADIO_PLAYLIST,
};

