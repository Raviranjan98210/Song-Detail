import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "Ek pyar ka nagma hai",
      duration: "4.30",
      singer: "Mukesh and Lata Mangeshkar",
    },
    {
      title: "Aaj jane ki zid na karo",
      duration: "3.30",
      singer: "Arijit Singh",
    },
    { title: "Lag ja gale", duration: "5.30", singer: "Lata Mangeshkar" },
    { title: "Kal ho na ", duration: "5.20", singer: "Sonu Nigam" },
  ];
};

const selectSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSong,
});
