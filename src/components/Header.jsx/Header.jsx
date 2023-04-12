import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul style={{ textAlign: 'center' }}>
                    <Link style={{ padding: "20px" }} to="/">Home</Link>
                    <Link style={{ padding: "20px" }} to="/login">login</Link>

                </ul>

            </nav>
        </div>
    );
};

export default Header;