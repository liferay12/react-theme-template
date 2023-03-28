import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';
import ThemeRender from "./theme/component/ThemeRender";
import themeData from "./theme/LeftNavigation";
import { useEffect } from "react";
import { W3Crm } from "./theme/js/custom";
import { EmailService } from "./theme/Service/EmailService";
import Home from "./component/Home";



function App() {
  EmailService.email = "ashwani@gmail.com";
  EmailService.name = "Lohit rao";



  return (
    <>
      <ThemeRender data={themeData}></ThemeRender>;
      
    </>
  );
}

export default App;
