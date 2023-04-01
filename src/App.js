import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import ThemeRender from "./theme/component/ThemeRender";
import themeData from "./theme/LeftNavigation";
import { useEffect } from "react";
import { W3Crm } from "./theme/js/custom";
import { EmailService } from "./theme/Service/EmailService";
import Home from "./component/Home";

import toast, { Toaster } from 'react-hot-toast';
function App() {
  EmailService.email = localStorage.getItem("email");
  EmailService.name = "Lohit rao";
  const notify = () => toast.success('Here is your toast.');

  return (
    <>
      {/* <h1>Hello</h1>
      <button type="button" onClick={notify}>Notify</button> */}
      <Toaster position="left" reverseOrder={false} />
      <ThemeRender data={themeData}></ThemeRender>;
      {/* <button onClick={notify}>Notify</button> */}
    </>
  );
}

export default App;
