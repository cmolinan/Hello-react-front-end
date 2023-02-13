import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/greetings';

function Greeting() {
  const message = useSelector((state) => state.stGreeting.message.message);
  const loading = useSelector((state) => state.stGreeting.loading);
  const error1 = useSelector((state) => state.stGreeting.error);
  let msgText = message;

  if (loading) msgText = 'loading';
  if (error1) msgText = error1;

  const dispatch = useDispatch();
  const Click = () => {
    dispatch(fetchmessage());
  };
  console.log('HELLO ', message, '--loading', loading, ' -error', error1);
  return (
    <div>
      <div>
        <h1>{msgText}</h1>
      </div>
      <button type="button" onClick={Click}>Read Greeting</button>
    </div>
  );
}

export default Greeting;
