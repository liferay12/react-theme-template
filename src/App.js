import logo from './logo.svg';
import './App.css';
import { Topbar } from './theme/component/TopBar';
import { SideBar } from './theme/component/SideBar';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
