import logo from "./logo.svg";
import "./App.css";

import ThemeRender from "./theme/component/ThemeRender";
import themeData from "./theme/theme.json";
// import {apexchart} from './theme/js';

function App() {
  return (
    <>
      <ThemeRender data={themeData}></ThemeRender>;
    </>
  );
}

export default App;
