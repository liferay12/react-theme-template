import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
import "../js/custom";
import { Topbar } from "./TopBar";
import "font-awesome/css/font-awesome.min.css";
import BreadCrumb from "./BreadCrumb";
import { Content } from "./Content";
import TopbarConfig from "../TopbarConfig";

const ThemeRender = (props) => {
  console.log("======" + props.data.section);
  return (
    <body
      data-typography="poppins"
      data-theme-version="light"
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
      <div id="main-wrapper" class="show">
        <SideBarToggle></SideBarToggle>
        <ChatBox></ChatBox>
        <Topbar data={TopbarConfig}></Topbar>
        <SideBar themeData={props.data}></SideBar>

        <div class="content-body" style={{ minHeight: "939px" }}>
          <BreadCrumb></BreadCrumb>
          <div class="container-fluid">
            <div class="row">
              <Content data={props.data}></Content>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ThemeRender;
