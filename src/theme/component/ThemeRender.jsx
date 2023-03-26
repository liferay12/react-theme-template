
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
import { Test } from "./Test";
import { Test1 } from "./Test1";
import { Topbar } from "./TopBar";
import 'font-awesome/css/font-awesome.min.css';
const ThemeRender = (props) => {


  console.log("======" + props.data.section[0].title)
  return (
    <div id="main-wrapper" class="show">
      <div data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_4" data-headerbg="color_4" data-sidebar-style="full" data-sidebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1" data-secondary="color_1">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <SideBarToggle></SideBarToggle>
                <ChatBox></ChatBox>
                <Topbar></Topbar>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">

                <SideBar themeData={props.data} ></SideBar>
              </div>

              <div className="col-md-10 border" style={{ width: '78vw', marginLeft: '230px', marginTop: '50px', padding: '1rem' }}>
                <div className="col-md-12">
                  <Test1></Test1>
                </div>
                <Router >

                  <Routes>
                    {
                      props.data.section.map((section) =>
                        <>
                          {
                            section.option.map((item) =>
                              <>
                                {
                                  item.subItem.length != 0 ? <Route exact path={item.path} element={item.component} /> : <Route exact path={item.path} element={item.component} />
                                }


                              </>
                            )
                          }
                        </>
                      )
                    }



                    {/* <Route exact path="/page1" element={<Test1></Test1>} />
                    <Route exact path="/page2" element={<h1>Hello sgjhdjx fgvjshmdxkf,v</h1>} />
                    <Route exact path="/page3" element={""} /> */}
                  </Routes>
                </Router>
              </div>
            </div>
          </div>

        </div>

        <div >


          {/* <div className="col-md-10"> */}

          {/* </div> */}
        </div>

      </div>

    </div>



  );
}

export default ThemeRender;
