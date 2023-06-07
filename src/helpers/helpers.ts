export const sortedCards = (cards:number[]): number[] => {
    if (cards.length <= 1) {
        return cards;
    };

    const pivot = cards[cards.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i] <= pivot) {
            left.push(cards[i]);
        } else {
            right.push(cards[i]);
        }
    }
    // Recursively sort the sub-arrays and combine the results
    return [...sortedCards(left), pivot, ...sortedCards(right)];
}