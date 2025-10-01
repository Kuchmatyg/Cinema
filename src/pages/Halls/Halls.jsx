import React, { useContext } from 'react';
import { HallsContext } from './Context';
import './Halls.scss'

export const Halls = () => {
    const halls = useContext(HallsContext)


    return (
        <>
            <h2 className='header'>Залы</h2>
            <div className='card-container'>
                {halls.map(hall => (
                    <div className='hall-card'
                        key={hall.id} >
                        <span>{hall.name}</span>
                        <span>Вместимость: {hall.capacity}</span>
                        <img src={hall.image} />
                    </div>
                ))}
            </div>
        </>
    )
}