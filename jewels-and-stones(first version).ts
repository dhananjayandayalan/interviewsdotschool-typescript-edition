function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0;

    for(let i = 0 ; i < jewels.length ; i++) {
        for(let j = 0 ; j < stones.length ; j++) {
            if(jewels.charAt(i) === stones.charAt(j)) {
                count++;
            }
        }
    }

    return count;
};
