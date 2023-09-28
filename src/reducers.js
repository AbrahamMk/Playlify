import * as types from './types';

const initialState = {
  playlistName: '',
  songs: [],
  isSidebarOpen: true,
  currentSong: null,
  isPlaying: false,
  volume: 50,
  progress: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
        currentSong: action.payload,
        isPlaying: true,
      };
    case types.DELETE_SONG:
      const updatedSongs = [...state.songs];
      updatedSongs.splice(action.payload, 1);
      return {
        ...state,
        songs: updatedSongs,
      };
    case types.PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
      };
    case types.PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };
    case types.NEXT_SONG:
      // Implement next song logic
      return state;
    case types.PREVIOUS_SONG:
      // Implement previous song logic
      return state;
    case types.SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };
    case types.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case types.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default reducer;