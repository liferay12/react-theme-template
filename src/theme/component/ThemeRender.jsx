
import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
//import { Test } from "./Test";
import { Test1 } from "./Test1";
import { Topbar } from "./TopBar";
import "font-awesome/css/font-awesome.min.css";
import BreadCrumb from "./BreadCrumb";
import { Content } from "./Content";

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
            <Content data={props.data}></Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeRender;
