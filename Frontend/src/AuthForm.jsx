import React, { useState } from 'react';
import './App.css';

function AuthForm() {
  const [tab, setTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    alert(`Login: ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add register logic here
    alert(`Register: ${registerName}, ${registerEmail}`);
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="auth-title">Login Form</h2>
        <div className="auth-tabs">
          <button
            className={tab === 'login' ? 'active' : ''}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={tab === 'register' ? 'active' : ''}
            onClick={() => setTab('register')}
          >
            Signup
          </button>
        </div>
        {tab === 'login' ? (
          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
              required
            />
            <div className="auth-links">
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="auth-btn">Login</button>
            <div className="auth-bottom-text">
              Not a member?{' '}
              <span className="switch-link" onClick={() => setTab('register')}>Signup now</span>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={registerName}
              onChange={e => setRegisterName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={registerEmail}
              onChange={e => setRegisterEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth-btn">Signup</button>
            <div className="auth-bottom-text">
              Already a member?{' '}
              <span className="switch-link" onClick={() => setTab('login')}>Login</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthForm; 