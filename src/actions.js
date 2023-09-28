import * as types from './types';

export const addSong = (song) => ({
  type: types.ADD_SONG,
  payload: song,
});

export const deleteSong = (index) => ({
  type: types.DELETE_SONG,
  payload: index,
});

export const playSong = () => ({
  type: types.PLAY_SONG,
});

export const pauseSong = () => ({
  type: types.PAUSE_SONG,
});

export const nextSong = () => ({
  type: types.NEXT_SONG,
});

export const previousSong = () => ({
  type: types.PREVIOUS_SONG,
});

export const setVolume = (volume) => ({
  type: types.SET_VOLUME,
  payload: volume,
});

export const setProgress = (progress) => ({
  type: types.SET_PROGRESS,
  payload: progress,
});

export const toggleSidebar = () => ({
  type: types.TOGGLE_SIDEBAR,
});

export const setCurrentSong = (song) => ({
  type: types.SET_CURRENT_SONG,
  payload: song,
});