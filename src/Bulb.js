import React, { useContext, useState, useRef } from 'react';
import { LightBulbContext } from './LightBulb';
import bulbOn from './images/bulb_on.png';
import bulbOff from './images/bulb_off.webp';

function Bulb() {
    const [bulbOn_, setBulbOn] = useState(true);
    const delay = useContext(LightBulbContext);
    const intervalCount = useRef(1);

    const handelButtonClick = () => {
        if (intervalCount.current < 5) {
            const interval = setInterval(() => {
                setBulbOn(prevState => !prevState);
                intervalCount.current += 1;
                console.log("Intervals: ", intervalCount)

                if (intervalCount.current === 5) {
                    clearInterval(interval);
                }
            }, 3000);
        }
    };

    return (
        <div className='light-bulb'>
            
            {bulbOn_ ? (
                <img style={{ width: '350px' }} src={bulbOn} alt="light bulb on" />
            ) : (
                <img style={{ width: '350px' }} src={bulbOff} alt="light bulb off" />
            )}
            <button onClick={handelButtonClick}>Toggle 5 times</button>
            {/* Render other components */}
        </div>
    );
}

export default Bulb;
