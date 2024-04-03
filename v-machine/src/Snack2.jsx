import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
    return (
        <div>
            <h2>Candy Bar</h2>
            <p>Sweet Chocolate!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}

export default Snack2;
