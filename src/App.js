import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import {Footer} from "./components/footer";


export default function App() {
  const [fan, setFan] = useState("");
  const [light,setLight] = useState(false)

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const lightTheme = () => { 
    setLight(!light)
    console.log(light)
  }

  return (
    <DefaultContext.Provider value={{ handleCreateFan,lightTheme }}>
      <div className={`${light? 'bodyLight':'body'}`}>
      <Header fan={fan} light={light} />
      <hr />
      <Content light={light} />
      <Footer/>
      </div>
    </DefaultContext.Provider>
  );
}
