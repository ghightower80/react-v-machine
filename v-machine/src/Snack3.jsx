import React from 'react';
import { Link } from 'react-router-dom';

function Snack3() {
    return (
        <div>
            <h2>Bubble Gum</h2>
            <p>Blow a big bubble!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}

export default Snack3;
