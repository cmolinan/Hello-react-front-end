import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/greetings';

function Greeting() {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const Click = () => {
    dispatch(fetchmessage());
  };

  return (
    <div>
      <div>
        {message.message}
      </div>
      <button type="button" onClick={Click}>Read Greeting</button>
    </div>
  );
}

export default Greeting;
