import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui grid container segment" style={{ marginTop: "10px" }}>
      <div className="ui row">
        <div className="ui column eight wide">
          <SongList />
        </div>

        <div className="ui column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
