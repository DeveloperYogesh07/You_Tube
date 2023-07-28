import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { json } from "react-router-dom";
// import store from "../utils/store";
import { cacheResults } from "../utils/serachSlice";

const Head = () => {

  const [serachQuery,setSerachQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const serachCache = useSelector((store)=>store.search);

  const dispatch = useDispatch();
  
  useEffect(()=>{
  
   const timer = setTimeout(() => {
    if(serachCache[serachQuery]){
      setSuggestions(serachCache[serachQuery]);
     }else{
       getSearchSuggestions();
     }
   }, 200); 

   return () =>{
    clearTimeout(timer);
   }
     
  },[serachQuery])

 const getSearchSuggestions = async () =>{
          const data = await fetch(YOUTUBE_SEARCH_API+serachQuery);
          console.log("api call:"+serachQuery);
          const json = await data.json();
          setSuggestions(json[1]);
          // console.log(json[1]); 
          
          // set cache
          dispatch(cacheResults({
            [serachQuery]:json[1],
          }));
 }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-xl">
      <div className="flex col-span-1 cursor-pointer">
        <img
          className="h-8"
          onClick={() => toggleMenuHandler()}
          alt="hamburgure"
          src="https://cdn-icons-png.flaticon.com/512/3388/3388823.png"
        />
        <a href="/">
          <img
            className="h-9 mx-5"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 ml-60">
        <div className="flex">
        <input
          className="w-1/2 border border-gray-400 p-1 px-5 rounded-l-3xl"
          type="text"
          placeholder="serach"
          value={serachQuery}
          onChange={(e)=>{
            setSerachQuery(e.target.value);
          }}
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-800 p-1 rounded-r-3xl bg-gray-100">
          <img
            className="h-6"
            alt="user-icon"
            src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
          />
        </button>
        </div>

        <div>
          {showSuggestions && (
            <ul className="fixed bg-white  px-3 w-[29rem] shadow-lg rounded-lg">
          {suggestions.map(s=><li key={s} className="py-1 shadow-sm hover:bg-gray-200">{s}</li>)}
        </ul>
          )}
        
      </div>
    </div>

      

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://img.freepik.com/free-icon/black-male-user-symbol_318-60703.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
