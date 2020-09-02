import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <h3>Please select song to know the details</h3>;
  }
  return (
    <div>
      <h3>Song Detail:</h3>
      <p>Title : {song.title}</p>
      <p>Duration : {song.duration} minute</p>
      <p>Singers : {song.singer}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
