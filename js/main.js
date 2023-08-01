/**
 You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
**/

//PREP (Parameter, Return, Example, Pseudo Code)

//P: This will always be a number / The number will always be positive / The parameter given will always be whole numbers

//R: Return to the console

//E:    expandedForm(12) // "10 + 2"
//      expandedForm (143) // "100 + 40 + 3"
//      expandedForm (71526) // "70000 + 1000 + 500 + 20 + 6"
function expandedForm(num) {
    //P: Pseudo Code
    // Seperate the numbers into a string (maybe an array)
    let seperate = num.toString().split("")
    for (let i = 0; i < seperate.length; i++){ //this is a nested loop
        for (let j = seperate.length - i; j > 1; j--){
            seperate[i] += '0';
        }
    }
    let together = seperate.filter(value => !value.startsWith(0));
    return together.join(' + ')
    //add 0's to the end of the number proportional to the array

  }

  console.log(expandedForm(41231))
