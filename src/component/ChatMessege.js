import React from 'react'

const ChatMessege = ({name,messege}) => {
  return (
    <>
    <div className='flex items-center shadow-sm p-1'>
          <img
          className="h-4 mt-2"
          alt="user-logo"
          src="https://img.freepik.com/free-icon/black-male-user-symbol_318-60703.jpg"
        />
    <span className='px-2 font-semibold'>{name}</span>
    <span className=''>{messege}</span>
    </div>
    </>
  )
}

export default ChatMessege