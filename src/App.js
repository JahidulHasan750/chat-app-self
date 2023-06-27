
import Authentication from "./authentication/Authentication";
import Navbar from "./component/Navbar";
import SendMessage from "./component/SendMessage";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import {Routes, Route} from 'react-router-dom'
import Protected from "./protected/Protected";

function App() {
  return (
    <div className="App ">
      <Authentication>
      <Navbar></Navbar>
      <Routes>
      
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/chat" element={<Protected><Chat></Chat></Protected>}></Route>
      </Routes>
    
      </Authentication>
      
  
     
   
    </div>
  );
}

export default App;
