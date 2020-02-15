import { combineReducers } from 'redux';

const songsReducer = ()=>{
    return [
        {title:'Song-A', duration:'01:30'},
        {title:'Song-B', duration:'02:30'},
        {title:'Song-C', duration:'03:30'},
        {title:'Song-D', duration:'01:50'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
      return action.payload;
    }
    return selectedSong;
  };

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});