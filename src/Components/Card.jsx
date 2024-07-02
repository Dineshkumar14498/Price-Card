
import React from 'react';

const Card = ({ title, price, features }) => {
    return (
        <>
    
        <div className="card">
            <h5 className='Cardtitle'>{title}</h5>
            <h1 className='Pricelist'>{price}</h1>
            <hr />
            <ul className='fa-ul'>
                
                {features.map((feature, index) => {
                    if (typeof feature === 'string') {
                        return <li key= {index}>{feature}</li>;
                    }
                    return (
                        <li 
                        
                         key= {index} className={!feature.available ? 'unavailable' : ''}>
                            {feature.feature}
                        </li>
                    );
                })}
            </ul>
            <button className='btn btn primary'>BUTTON</button>
        </div>

        </>
    );
};

export default Card;
