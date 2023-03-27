import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';
import ThemeRender from "./theme/component/ThemeRender";
import themeData from "./theme/LeftNavigation";
import { useEffect } from "react";
import { W3Crm } from "./theme/js/custom";
import { EmailService } from "./theme/Service/EmailService";



function App() {
  EmailService.email = "ashwani@gmail.com";
  EmailService.name = "Ashwani rao";

  return (
    <>
      <ThemeRender data={themeData}></ThemeRender>;

    </>
  );
}

export default App;
