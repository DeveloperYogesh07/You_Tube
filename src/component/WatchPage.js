import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import {   useSearchParams } from "react-router-dom";
import CommentsContainor from "./CommentsContainor";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  // console.log(  searchParam.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex ">
      <div>
      <iframe
        width="1150"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat />
        </div>
    </div>
    <CommentsContainor />
    </div>
  );
};

export default WatchPage;
