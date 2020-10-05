import React from 'react';
import {useStateValue} from './StateProvider'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/Chatbox/chat';
import { Switch,Route} from 'react-router';
import {BrowserRouter as Router } from 'react-router-dom';
import SidebarChat from './components/sidebar/SideBarChat';
import Login from "./components/Login/Login"
function App() {
  const [{user},dispatch]= useStateValue('');
  return (
   
    <div className="app">
       {!user?(
      <Login/>
    ):
         <div className="app__body">
        
         
            {/* Route setup */}

            <Router>
             <Switch>
                
                <Route path="/rooms/:roomId">
                  <Sidebar/>
                  <Chat/>
                </Route>
                <Route path="/">
                <Sidebar/>
                  <Chat/>
                </Route>
                </Switch>
            </Router>
      </div>
}  
    </div>
    );
}

export default App;
