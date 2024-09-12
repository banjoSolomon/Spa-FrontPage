
import './App.css';
import {ROUTES} from "./Routes/routes.index";
import {useRoutes} from "react-router-dom";
import WOW from 'wow.js';
new WOW().init();

function App() {
  return (
      useRoutes(ROUTES)

);
}

export default App;
