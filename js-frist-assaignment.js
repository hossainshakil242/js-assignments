
/** 1.    create a function and function name is mindGame. take input an int number from user and do multiplication
 * with 3 then addition with 10 then divided with 2 then subtraction with 5 then return result . negative value automatics convert positive
 */

// let userInput = -50.45654;
// function mindGame(userInput){
//     userInput=Math.abs(userInput);
//     let multiplication = userInput * 3;
//     let addition = multiplication + 10;
//     let divided = addition / 2;
//     let result = divided - 5 ;

//     return result;
// }
// console.log(mindGame(userInput));

/** 2.  create a function the function name will be evenOdd . input a string from user
 * and count sting number and if count number odd then function will do return odd.and not odd then return 
 * even
*/
// let userInput = '444' ;
// function evenOdd(userInput){
//     let userInputLen = userInput.length;
//     if(typeof userInput != "string" ){
//         console.log('Enter a string');
//     }
//      else if(userInputLen % 2 == 0){
//         console.log('even');
//     } else{
//         console.log('odd');
//     }
// }
// evenOdd(userInput);


/**create a function . the function name will be isLGSeven . and input an int number from user . then if user input
 * string then function return please input number, 
 *  */ 

// let userInput = 5;
// function isLGSeven(userInput){
//     if(userInput<7){
//         return userInput;
//     } else{
//         let result = userInput * 2;
//         return result;
//     }
// }
// console.log(isLGSeven(userInput));

/**
 * create a function the function name will be findingBadData.here have a array and some number in this array 
 * and this function return how many negative number in this array.
 */
const arr = [4,34,32,-45,4,-42,6,3,-44];
// let aLen = arr.length;
// function findingBadData(arr){
//     let count = 0;
//     for(let i=0; i<aLen; i++){
//         if(arr[i]<0){
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(findingBadData(arr));

// gemsToDiamond 

// function gemsToDiamond(person1,person2,person3){
//     let fastResult = person1 * 21;
//     let secondResult = person2 * 32;
//     let thirdResult = person3 * 43;

//     let total = fastResult + secondResult + thirdResult;


//     if(total > 1000*2){
//         total -= 2000;
//         return total;
//     } else{
//         return total;
//     }

// }
// console.log(gemsToDiamond(20,200,50));
