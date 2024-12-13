import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/api';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setErrorMessage('');
            const response = await signup({ username, email, phone, password });
            if (response.data.statusCode === 201) {
                setUsername('');
                setEmail('');
                setPhone('');
                setPassword('');
                navigate('/', { replace: true });
            } else {
                setErrorMessage(response.data.message || 'Signup failed!');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Signup</h1>
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
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                />
                <br />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
