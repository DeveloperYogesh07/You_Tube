import React, { useEffect, useState } from "react";
import ChatMessege from "./ChatMessege";
import { useDispatch, useSelector } from "react-redux";
import { addMessege } from "../utils/chatSlice";
import {generateRandomName} from "../utils/helper"
import { makeRandomMessege } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [livemessage,setLiveMessage] = useState("");

  const chatMesseges = useSelector((store) => store.chat.messeges);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessege({
          name: generateRandomName(),
          messege: makeRandomMessege(20),
        })
      );
    }, 10500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="ml-2 w-full h-[500px] p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMesseges.map((c,index) => (
        <ChatMessege key={index} name={c.name} messege={c.messege} />
      ))}
    </div>

    <form className="  bg-gray-200  w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        console.log('onform submiyt',livemessage);
        dispatch(addMessege({
            name:"yogesh upadhyay",
            messege:livemessage
        }))
        setLiveMessage("");
    }}>
     <input
     className="w-79 pl-2 "
     type="text"
     value={livemessage}
     onChange={(e)=>setLiveMessage(e.target.value)}
     />
     <button className="px-1 mx-2 bg-green-200">submit</button>
    </form>
    </>
  );
};

export default LiveChat;
