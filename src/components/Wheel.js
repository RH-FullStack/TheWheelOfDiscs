// src/components/Wheel.js
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
    { option: '2 Shots Best' },
    { option: 'Putter' },
    { option: 'Midrange' },
    { option: 'Fairway Driver' },
    { option: 'Distance Driver' },
    { option: 'Opponents Choice' },
    { option: 'Players Choice' },
    { option: 'Roller' },
    { option: 'Anhyzer' },
    { option: 'Hyzer' },
    { option: 'Forehand' },
    { option: 'Backhand' }
];

function CustomWheel() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden', // optional, hides any overflow
            }}
            onClick={handleSpinClick}
        >
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['#F6E83B', '#2D8414', '#DF45BC', '#DB2A00', '#7ECE26', '#6EB7FF',]}
                textColors={['#0D0D0D']}
                onStopSpinning={() => setMustSpin(false)}
                spinDuration={[0.5]}
            />
        </div>
    );
}

export default CustomWheel;
