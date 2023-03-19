function fizzBuzz(n: number): string[] {
    const stringArray: string[] = [];

    for(let i = 1 ; i <= n ; i++) {
        let str: string;

        if(i % 3 === 0 && i % 5 === 0) {
            str = "FizzBuzz";
        } else if(i % 3 === 0) {
            str = "Fizz";
        } else if(i % 5 === 0) {
            str = "Buzz";
        } else {
            str = i + "";
        }

        stringArray.push(str);
    }

    return stringArray;
};
