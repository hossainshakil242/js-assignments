
/** 1.    create a function and function name is mindGame. take input an int number from user and do multiplication
 * with 3 then addition with 10 then divided with 2 then subtraction with 5 then return result . negative value automatics convert positive
 */

{
    let userInput = 5;
    function mindGame(userInput) {
        userInput = Math.abs(userInput);
        let multiplication = userInput * 3;
        let addition = multiplication + 10;
        let divided = addition / 2;
        let result = divided - 5;

        return result;
    }
    console.log(mindGame(userInput));
}

/** 2.  create a function the function name will be evenOdd . input a string from user
 * and count sting number and if count number odd then function will do return odd.and not odd then return 
 * even
*/

{
    let userInput = 'Real Shakil ';

    function evenOdd(userInput) {
        let userInputLen = userInput.length;
        if (typeof userInput != "string") {
            console.log('Enter a string');
        }
        else if (userInputLen % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }

    console.log(evenOdd(userInput));
}


/**create a function . the function name will be isLGSeven . and input an int number from user . then if user input
 * string then function return please input number,
 *  */

{
    let userInput = 8;
    function isLGSeven(userInput) {
        if (userInput <= 7) {
            return userInput;
        } else {
            let result = userInput * 2;
            return result;
        }
    }
    console.log(isLGSeven(userInput));
}

/**
 * create a function the function name will be findingBadData.here have a array and some number in this array
 * and this function return how many negative number in this array.
 */

{
    const arr = [4, -34, 32, -45, 4, -42, 6, 3, -44];
    function findingBadData(arr) {
        let aLen = arr.length;
        let count = 0;
        for (let i = 0; i < aLen; i++) {
            if (arr[i] < 0) {
                count += 1;
            }
        }
        return count;
    }
    console.log(findingBadData(arr));
}

/**
 * create a function the function name will be gemsToDiamond . now multiplication person with 21 , and person2 32, and person3 43. total all number . if total getter then 2k then return just subtraction total from 2k number.  and return total,
 */

{
    function gemsToDiamond(person1, person2, person3) {
        let fastResult = person1 * 21;
        let secondResult = person2 * 32;
        let thirdResult = person3 * 43;

        let total = fastResult + secondResult + thirdResult;

        if(typeof person1 != 'number' || typeof person2 != 'number' || typeof person3 != 'number'){
            let text = 'just input number allow';
            return text;
        }
        else if(total > 1000 * 2) {
            total -= 2000;
            return total;
        } else {
            return total;
        }

    }
    console.log(gemsToDiamond(20, 200, 50));
}
