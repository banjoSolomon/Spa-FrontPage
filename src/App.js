
import './App.css';
import {ROUTES} from "./Routes/routes.index";
import {useRoutes} from "react-router-dom";


function App() {
  return (
      useRoutes(ROUTES)

);
}

export default App;
