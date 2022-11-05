import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
const Chats = () => {

  const [chats,setChats] = useState([])
  const { currentUser } = useContext(AuthContext);


  useEffect(()=>{

    const getChats = () => {   //this is load the chats of the currentUser
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());

      });
      
      return ()=>{
        unsub();
      };
    };

  },[])

  return (
    <div className='chats'>
     <div className='userChat'>
    <img src='https://images.pexels.com/photos/13417556/pexels-photo-13417556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
    <div className='userChatInfo'>
      <span>
        Harsh
      </span>
      <p>Hello</p>
    </div>
    </div>

    <div className='userChat'>
    <img src='https://images.pexels.com/photos/13417556/pexels-photo-13417556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
    <div className='userChatInfo'>
      <span>
        Harsh
      </span>
      <p>Hello</p>
    </div>
    </div>
    </div>
  )
}

export default Chats