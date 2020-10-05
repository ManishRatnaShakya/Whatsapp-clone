import React,{useEffect,useState} from 'react';
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SideBarChat';
import db from '../../firebase';
const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() =>{
       const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
            
                setRooms(snapshot.docs.map(doc=>
                    (
                        {
                            id:doc.id,
                            data:doc.data(),
                        }
                    )
                ))
            );
            return ()=>{
                unsubscribe();
            }
        
    },[])
    return (
        <div className="sidebar">
          
            <div className="sidebar__header">
                <Avatar src="data:image/jpeg;base64,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"/>
                <div className="sidebar__headerRight"> 
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />

                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>   
            </div> 
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text" /> 
                </div>
            </div> 
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room =>(
                    <SidebarChat key={room.id}
                    id={room.id}
                    name={room.data.name}/>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
