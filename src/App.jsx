import Sidenav from "./components/Nav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const displayMode = darkMode
    ? {
        primaryText: " text-gray-300 ",
        secondaryText: " text-gray-400 ",
        accentText: " text-orange-500 ",
        accentColor: " bg-orange-500 ",
        firstBg: " bg-[#111] ",
        secondBg: " bg-zinc-800 ",
        sideNavBg: " bg-zinc-950 ",
        sideNavText: " text-black ",
      }
    : {
        primaryText: " ",
        secondaryText: " ",
        accentText: " ",
        accentColor: " ",
        firstBg: " ",
        secondBg: " ",
        sideNavBg: " ",
        sideNavText: " ",
      };
  return (
    <div>
      <Sidenav displayMode={displayMode} />
      <Main displayMode={displayMode} />
      <Projects displayMode={displayMode} />
      <Contact displayMode={displayMode} />
    </div>
  );
}

export default App;
