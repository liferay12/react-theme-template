import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
import "../js/custom";
import { Topbar } from "./TopBar";
import "font-awesome/css/font-awesome.min.css";
import BreadCrumb from "./BreadCrumb";
import { Content } from "./Content";
import TopbarConfig from "../TopbarConfig";
import $ from "jquery"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UrlProtect } from "../Service/UrlProtect";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
const ThemeRender = (props) => {

  // console.log("---------------- : " + useLocation())

  const [themeMode, setThemeMode] = useState("light");
  const [login, setLogin] = useState(false);

  const [f, setF] = useState("Dashboard");
  const [s, setS] = useState("dashboard");
  var handleConverterTheme = function (mode) {

    if (mode === "light") {
      setThemeMode("light");
    }
    if (mode === "dark") {
      setThemeMode("dark");
    }

  }
  console.log("======" + props.data.section);
  return (
    <>

      {
        true ? (
          <>
            <body
              data-typography="poppins"
              data-theme-version={themeMode}
              data-layout="vertical"
              data-nav-headerbg="color_4"
              data-headerbg="color_4"
              data-sidebar-style="full"
              data-sidebarbg="color_1"
              data-sidebar-position="fixed"
              data-header-position="fixed"
              data-container="wide"
              direction="ltr"
              data-primary="color_1"
              data-secondary="color_1"
            >


              <Router>
                {/* <Routes> */}
                <div id="main-wrapper" class="show">

                  <SideBarToggle></SideBarToggle>
                  <ChatBox></ChatBox>
                  <Topbar data={TopbarConfig}></Topbar>
                  <SideBar themeData={props.data} themeModeFun={handleConverterTheme}></SideBar>



                  <div class="content-body" style={{ minHeight: "939px" }}>
                    <BreadCrumb ></BreadCrumb>
                    <div class="container-fluid">
                      <div class="row">

                        <Content data={props.data}></Content>

                      </div>
                    </div>
                  </div>
                </div>
                {/* </Routes> */}
              </Router>
            </body >
          </>
        ) : (
          <Router>
            <Routes>
              <Route

                exact
                path={'/'}
                element={<UrlProtect Component={Login} />}
              />
              <Route

                exact
                path={'/signup'}
                element={<UrlProtect Component={SignUp} />}
              />
            </Routes>
          </Router>
        )
      }
    </>
  );
};

export default ThemeRender;
