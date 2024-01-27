import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(''); // Clear error when input changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear error when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    // If form is valid, you can proceed with further actions like API call, etc.
    setError(''); // Clear any previous error
    // Your further logic here, e.g., submitting the form
  };

  return (
    <div className="loginpage">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1 className="loginheading">LOGIN</h1>
        <label className={`username ${error && !username.trim() ? 'error' : ''}`}>
          USERNAME:
          <input type="text" value={username} onChange={handleUsernameChange} />
          {error && !username.trim() && <p className="error">{error}</p>}
        </label>
        <label className={`password ${error && !password.trim() ? 'error' : ''}`}>
          PASSWORD:
          <input type="password" value={password} onChange={handlePasswordChange} />
          {error && !password.trim() && <p className="error">Please enter a password</p>}
        </label>
      
        <button className={`submit ${error ? 'error' : ''}`} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
  
}

export default Login;
