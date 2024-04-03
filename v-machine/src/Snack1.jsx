import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
    return (
        <div>
            <h2>Chips</h2>
            <p>MMMMMM Potato chips!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}

export default Snack1;
