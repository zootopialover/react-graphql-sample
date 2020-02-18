import React, { useState } from 'react';

function BetAmount() {
    const [counterBottom, setCounterBottom] = useState(0.04885313);
    return (
        <div className='bet-amount-container'>
            <div>
                BET AMOUNT
                <span className='bet-amount-value'>
                    <span className='bet-amount-btc-icon'>₿</span>
                    <input className='bet-amount-btc-input' type="number" onChange={e => setCounterBottom(e.target.value)} value={counterBottom}/>
                </span>
            </div>
            <div>1/2</div>
            <div>x2</div>
        </div>
    )
}

export default BetAmount;