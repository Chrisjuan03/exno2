import React, { useState } from 'react';
//import NavBar from './components/NavBar';
import Axios from 'axios';
import './App.css';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const homepage = () => {
  history.push('/a1');
};

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setpswdReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginstatus, setloginstatus] = useState(' ');

  const register = () => {
    Axios.post('http://localhost:3002/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post('http://localhost:3002/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setloginstatus(response.data.message);
      } else {
        setloginstatus(response.data[0].username);
        homepage();
        return Promise.resolve();
      }
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <label>User name</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setpswdReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>

      <div>
        <h1>Login</h1>
        <label>User name</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginstatus}</h1>
    </div>
  );
}

export default App;
