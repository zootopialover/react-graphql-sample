import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const COMMENTS_SUBSCRIPTION = gql`
  subscription {
      betAdded {
        id,
        time,
        bet,
        payout,
        profit,
      }
}
`;

const parseDate = (unix_timestamp) => {
    let date = new Date(unix_timestamp);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : '0' +  date.getSeconds()}`
};

function RenderBetItem ({time, bet, multiplier, profit, index, isNew})  {
    const [marginTop, setMarginTop] = useState(0);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        let counter = 1;
        const scroller = setInterval(() => {
            counter++;
            if (counter <= 24) {
                setMarginTop(4 + counter)
            } else {
                clearInterval(scroller)
            }
        },10);
        setTimeout(() => {
                setVisible(true)
            }
        , 100)
    }, []);
    const profitColor = profit > 0 ? '#73FC7F' : '#FD7979';
    return (
        <div style={{maxHeight: marginTop}} key={`bet-item-${index}`} className={`bets-row bets-data-row ${visible ? 'visible' : ''}`}>
            <span>{time}</span>
            <span className='bet-amount-value'>
                    <span className='bet-amount-btc-icon'>₿</span>
                    {bet}
            </span>
            <span className='bet-amount-value'>x{multiplier}</span>
            <span className='bet-amount-value green'>
                    <span className='bet-amount-btc-icon'>₿</span>
                    <span style={{color: profitColor}}>{profit > 0 ? `+${profit}` : profit}</span>
            </span>
        </div>
    )
}

function List() {
    const [items, setItems] = useState([]);

    const { data: {betAdded} = {} } = useSubscription(
        COMMENTS_SUBSCRIPTION
    );

    useEffect(() => {
        if (betAdded) {
            const { time, bet, payout, profit, id } = betAdded;
            let currentItems = items.concat();
            if (currentItems.length < 10) {
                currentItems.unshift({
                    time: parseDate(time),
                    bet: bet / 1000,
                    multiplier: payout / 4,
                    profit: profit / 1000,
                    id
                })
            } else {
                currentItems.unshift({
                    time: parseDate(time),
                    bet: bet / 1000,
                    multiplier: payout / 4,
                    profit: profit / 1000,
                    id
                });

                currentItems.splice(-1,1)
            }
            setItems(currentItems);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [betAdded]);

    return (
        <div className='bets-list'>
            <div className='bets-row bets-header'>
                <span>TIME1</span>
                <span>BET</span>
                <span>MULTIPLIER</span>
                <span>PROFIT</span>
            </div>
            <div className='bets-items'>
                {items.map((item, index) => {
                    return <RenderBetItem {...item} key={item.id} isNew={index === 0}/>})}
            </div>
        </div>
    )
}

export default List;