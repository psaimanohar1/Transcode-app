// Login.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
      navigate('/assetTranscoding');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        className="border px-2 py-1 mr-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
