function lengthOfLastWord(s: string): number {
    let lastWordCount: number = 0;
    let currentWordCount: number = 0;

    for(let i = 0 ; i < s.length ; i++) {
        if(s.charAt(i) === " ") {
            currentWordCount = 0;
        } else {
            currentWordCount += 1;
            lastWordCount = currentWordCount;
        }
    }

    return lastWordCount;
};
