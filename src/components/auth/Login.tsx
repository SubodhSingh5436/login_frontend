import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../../services/api';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            console.log('Response:', response.data);

            if (response.data.statusCode === 200) {
                console.log('Login successful:', response.data);
                const userToken = response.data.data.token;

                // Store token in localStorage
                localStorage.setItem('token', userToken);
                setToken(userToken);

                // Clear form
                setUsername('');
                setPassword('');
                setErrorMessage('');
            } else {
                setErrorMessage(response.data.message || 'Login failed!');
            }
        } catch (error: any) {
            console.error('Error logging in:', error.response?.data || error);
            setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    useEffect(() => {
        const existingToken = localStorage.getItem('token');
        if (existingToken) {
            setToken(existingToken);
        }
    }, []);

    // Redirect if token is available
    if (token) {
        return <Navigate to='/home' />;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login</h1>
            {errorMessage && (
                <div style={{ color: 'red', margin: '10px' }}>
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                />
                <br />
                <button
                    type="submit"
                    style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
