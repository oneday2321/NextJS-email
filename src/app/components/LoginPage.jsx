'use client'
import React, { useState } from 'react';

const LoginPage = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = (e) => {
 e.preventDefault();
 // Handle login logic here
 console.log('Logging in with', username, password);
 };

 return (
 <div className='login-page'>
 <h1>Login</h1>
 <form onSubmit={handleLogin}>
 <div>
 <label>Username:</label>
 <input
 type='text'
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 />
 </div>
 <div>
 <label>Password:</label>
 <input
 type='password'
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />
 </div>
 <button type='submit'>Login</button>
 </form>
 </div>
 );
};

export default LoginPage;