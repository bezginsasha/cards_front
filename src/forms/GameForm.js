import React from 'react';
import './CommonForm.css';
import OverForm from './OverForm';

function GameForm() {
    return (
        <OverForm>
            <p>Game</p>
            <p>kunteynir</p>
            <input type="button" value="Easy" className="over-form-button" />
            <input type="button" value="Show" className="over-form-button" />
            <input type="button" value="Hard" className="over-form-button" />
        </OverForm>
    );
}

export default GameForm;
