import {Route, Link, Routes} from 'react-router-dom';
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Home from './Home.js';

function App() {
  return (
    <div>
      <div>
        <Routes>
        <Route exact path="/" component={this} element={<Home/>}/>
        <Route exact path="/Skills" component={Skills} element={<Skills/>}/>
        <Route exact path="/Contact" component={Contact} element={<Contact/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;