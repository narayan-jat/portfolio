import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f2f2f2',
            color: '#333',
            textAlign: 'center',
        },
        heading: {
            fontSize: '6em',
            fontWeight: 'bold',
            margin: '0',
            color: 'red',
        },
        message: {
            fontSize: '1.5em',
            marginTop: '20px',
            marginBottom: '30px',
            maxWidth: '600px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#ff6b6b',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#e55a5a',
        },
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.heading}>Privacy Error</div>
            <div style={styles.message}>Oops! The Resume has been removed because of privacy. Please contact me on Mail for further conversation.</div>
            <button
                style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate('/')}
            >
                Go Home
            </button>
        </div>
    );
};

export default NotFound;
