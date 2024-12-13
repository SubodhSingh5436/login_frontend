import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the App</h1>
            <p>Please login or sign up to continue.</p>
            <div>
                <button
                    onClick={() => navigate('/login')}
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
                <button
                    onClick={() => navigate('/signup')}
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Welcome;
