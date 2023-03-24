import logo from './logo.svg';
import './App.css';
import nav from './component/Navigation'
import { Topbar } from './theme/TopBar';
import { SideBar } from './theme/SideBar';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
