import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);
    const {snippet, statistics} =info;
    // console.log("snippet:"+ snippet);
     const {channelTitle,title,thumbnails} = snippet; 
  return (
    <div className='p-2 m-2 w-64 shadow-xl'> 
        <img 
        className='rounded-lg'
        alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard