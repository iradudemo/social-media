import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className='messageTop'>
        <img
          className='messageImg'
          src='https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <p className='messageText'>Hello this is John</p>
      </div>
      <div className='messageBottom'>1 hour ago</div>
    </div>
  );
}
