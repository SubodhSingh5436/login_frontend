import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const handleSignOut = () => {
        // Clear token from localStorage and context
        localStorage.removeItem('token');
        setToken(null);
        // Redirect to welcome page
        navigate('/', { replace: true });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hi, I'm Home Page!</h1>
            <p>Welcome to the home page!</p>
            <button
                onClick={handleSignOut}
                style={{
                    margin: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                Sign Out
            </button>
        </div>
    );
};

export default Home;
