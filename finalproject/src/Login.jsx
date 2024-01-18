import React ,{useState}from 'react'
import './Login.css'

function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const handleUsernamechange =(e)=>{
        setUsername(e.target.value)
    };
    const handleUPasswordchange =(e)=>{
        setPassword(e.target.value)
    };
    


  return (
    <div>
      <form>
        <label>
            Username:
            <input type='text' value={username} onChange={handleUsernamechange} />
        </label>
        <label>
            Password:
            <input type='password' value={password} onChange={handleUPasswordchange} />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
