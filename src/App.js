// App.js
import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {token ? (
        // Render authenticated content
        <HomePage token={token} />
      ) : (
        // Render login component
        <Login setToken={setToken} />
      )}
    </div>
  );
};

export default App;
