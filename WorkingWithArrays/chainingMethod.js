'use strict';
/* HIGHLIGHT: Chaining Method: Chaining Map, Filter, Reduce together one after another
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

/* NOTE: Can change as long as it Return a NEW array, but Reduce can NOT
- PIPELINE
- NOT overuse Chaining method
- NOT chaining method by using Splice and Reverse or any other method Mutate original Array
*/
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);  NOTE: can Check the current array of any stage of the Pipeline using the Third Parameter:arr
    return mov * eurToUSD;
  })
  // .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // 5522
