import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <ul>
                <li><Link to="/snack1">Chips</Link></li>
                <li><Link to="/snack2">Candy Bar</Link></li>
                <li><Link to="/snack3">Bubble Gum</Link></li>
            </ul>
        </div>
    );
}

export default VendingMachine;
