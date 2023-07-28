import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants" 
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

const[videos,setVideos] = useState([]);

useEffect(()=>{
 console.log("use effect called");
 getVideos();
 console.log("getvideo function called");

},[]); 

 const getVideos = async () =>{
  console.log("first render");
  const data = await fetch(YOUTUBE_VIDEOS_API);
  console.log(" fetching the data")
  
  const json = await data.json();
  console.log(json.items);
  setVideos(json.items);
}


  return (
    <div className='flex flex-wrap'>
      {/* {console.log('videos :::', videos[0])} */}
      {
      videos.map(video=>
      videos.length &&<Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link> )
      }
      {}
    </div>
  )
  
};

export default VideoContainer