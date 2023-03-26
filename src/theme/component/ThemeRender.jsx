import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
//import { Test } from "./Test";
import { Test1 } from "./Test1";
import { Topbar } from "./TopBar";
import "font-awesome/css/font-awesome.min.css";
import BreadCrumb from "./BreadCrumb";

const ThemeRender = (props) => {
  console.log("======" + props.data.section[0].title);
  return (
    <div id="main-wrapper" class="show">
      <SideBarToggle></SideBarToggle>
      <ChatBox></ChatBox>
      <Topbar></Topbar>
      <SideBar themeData={props.data}></SideBar>

      <div class="content-body" style={{ minHeight: "939px" }}>
        <BreadCrumb></BreadCrumb>
        <div class="container-fluid">
          <div class="row">
            <Router>
              <Routes>
                {props.data.section.map((section) => (
                  <>
                    {section.option.map((item) => (
                      <>
                        {item.subItem.length != 0 ? (
                          <Route
                            exact
                            path={item.path}
                            element={item.component}
                          />
                        ) : (
                          <Route
                            exact
                            path={item.path}
                            element={item.component}
                          />
                        )}
                      </>
                    ))}
                  </>
                ))}

                {/* <Route exact path="/page1" element={<Test1></Test1>} />
                    <Route exact path="/page2" element={<h1>Hello sgjhdjx fgvjshmdxkf,v</h1>} />
                    <Route exact path="/page3" element={""} /> */}
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeRender;
