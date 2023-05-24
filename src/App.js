import React from "react";
import "./App.css";
import { ReduxContainer } from "./components/MRedux";
import MRematchAppContainer from "./components/MRematch";

const App = () => {
  return (
    <div className="App">
      <ReduxContainer />
      <MRematchAppContainer />
    </div>
  );
};

export default App;
