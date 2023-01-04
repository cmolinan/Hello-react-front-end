import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingMessage from './components/Greeting';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GreetingMessage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
