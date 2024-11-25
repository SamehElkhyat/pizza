import { Outlet } from 'react-router-dom';
import './App.css';
 import Navbar from './Components/Navbar/Navbar.jsx';
import SideBar from './Components/SideBar/SideBar.jsx';

function App() {


  return<>
<Navbar/>

<SideBar/>

<Outlet/>

    </>;
}

export default App;
