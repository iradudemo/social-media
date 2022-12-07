import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>Haba kuki</span>
      </div>
    </div>
  );
}
