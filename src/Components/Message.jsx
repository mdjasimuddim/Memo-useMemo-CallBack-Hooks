import React, {memo} from 'react'

const Message = ({numberOfCounts, onHandleIncrement}) => {
  console.log('Message Rendering');
  return (
    <div>
        <p>send {numberOfCounts} messages</p>
        <button onClick={onHandleIncrement}>IncrementMessageNumber</button>
    </div>
  )
}

export default memo(Message)