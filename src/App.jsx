import {useState} from 'react';
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";

import "./app.scss"
import {MenuOpenContext} from "./contexts/MenuOpenContext"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <MenuOpenContext.Provider value={{menuOpen, setMenuOpen}}>
        <Topbar />
        <Menu />
      </MenuOpenContext.Provider>
      <div className="sections">
        <Home></Home>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
