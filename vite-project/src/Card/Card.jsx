import React from 'react';
import './Card.css'; 


const Card = ({title, description, name, dateStart, dateEnd}) => {
    return (
        <div className="card">
            <h1 className='card-title'>{title}</h1>
            <p className='card-description'>{description}</p>
            <h3 className="card-name">{name}</h3>
            <h5 className='date-start'>{dateStart}</h5>
            <h5 className='date-end'>{dateEnd}</h5>
        </div>
    );
};



export default Card;