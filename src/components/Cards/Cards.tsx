import {useCards} from "./useCards";
import Card from "../Card/Card";

import styles from "./Cards.module.css";


const Cards = () => {
    const {handleAddNumber, handleDeleteNumber, handleSort, cards} = useCards()

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <header className={styles.header}>
                    <button onClick={handleAddNumber}>Add number</button>
                    <button onClick={handleSort}>Sort numbers</button>
                </header>
                <main>
                    <section>
                        <div className={styles.cardItem}>
                            <Card handleDeleteNumber={handleDeleteNumber} cards={cards}/>
                        </div>
                    </section>

                </main>
                <footer>
                    footer
                </footer>
            </div>
            <aside>
                <div className={styles.instructions}>
                    <p>
                        Press the "add card button" to add new Card. Use the "sort card button" to sort the Cards by
                        increase. Press an X icon on the top right to delete them.
                    </p>
                </div>
            </aside>
        </div>
    );
}

export default Cards
