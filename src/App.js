import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';
import ThemeRender from "./theme/component/ThemeRender";
import themeData from "./theme/theme";
import { useEffect } from "react";
import { W3Crm } from "./theme/js/custom";
import { Test } from "./theme/component/Test";
// import {apexchart} from './theme/js';

function App() {
  // useEffect(() => {
  //   $('[data-bs-toggle="popover"]').popover();
  //   // 'use strict';
  //   W3Crm.init();
  //   W3Crm.load();
  //   setTimeout(function () {
  //     W3Crm.handleMenuPosition();
  //   }, 1000);
  //   W3Crm.resize();
  //   setTimeout(function () {
  //     W3Crm.handleMenuPosition();
  //   }, 1000);
  // }, []);

  console.log(themeData);



  return (
    <>
      <ThemeRender data={themeData}></ThemeRender>;

    </>
  );
}

export default App;
