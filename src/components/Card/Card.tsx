import {ICardProps} from "./types";

import styles from './Card.module.css'
const Card = ({cards, handleDeleteNumber} : ICardProps) => {
    return (
        <>
            {
                cards.map((number)=>(
                    <div key={number} className={styles.card}>
                        <h2>{number}</h2>
                        <button onClick={()=>handleDeleteNumber(number)}>X</button>
                    </div>
                ))
            }
        </>
    );
};

export default Card;