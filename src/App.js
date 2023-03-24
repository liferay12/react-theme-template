import logo from './logo.svg';
import './App.css';
import { Topbar } from './theme/component/TopBar';
import { SideBar } from './theme/component/SideBar';
import { SideBarToogle } from './theme/component/SidebarToogle';
import { ChatBox } from './theme/component/ChatBox';
// import {apexchart} from './theme/js';

function App() {
  return (
    <body data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_4" data-headerbg="color_4" data-sidebar-style="full" data-sidebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1" data-secondary="color_1">
      <div id="main-wrapper" class="show">
        <SideBarToogle></SideBarToogle>
        <ChatBox></ChatBox>
        <Topbar></Topbar>
        <SideBar></SideBar>
      </div>
    </body>
  );
}

export default App;
