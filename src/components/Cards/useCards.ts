import {useEffect, useState} from "react";
import {sortedCards} from "../../helpers/helpers";

export const useCards = () => {
    const [cards, setCards] = useState<Array<number>>([]);

    const handleAddNumber = () => {
        let newNumber = Math.floor(Math.random() * (1000));
        if (cards.includes(newNumber)) {
            newNumber = Math.floor(Math.random() * (1000));
        }

        setCards(prev=>[...prev, newNumber]);

    }

    const handleDeleteNumber = (value:number) => {
        setCards(prev=>prev.filter(item=>item!==value))
    }

    const handleSort = () => {
        const sorted = sortedCards(cards);
        setCards(sorted)
    }

    useEffect(()=>{
        const storageNumbers = localStorage.getItem('numbers')
        if(storageNumbers){
            setCards(JSON.parse(storageNumbers))
        }

    }, []);
    useEffect(()=>{
        window.addEventListener('beforeunload', async ()=>{
            if(cards.length){
                localStorage.setItem('numbers',JSON.stringify(cards))
            }else {
                localStorage.removeItem('numbers')
            }
        })
    }, [cards])
    return{
        handleAddNumber,
        handleDeleteNumber,
        handleSort,
        cards

    }
}