// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1996));

// TODO: PROBLEM 1:
/* We work for a company building a smart home thermometer. 
Our most recent task is this: "Given an array of temperatures of one day, 
calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error."
*/

// 1. Understanding the problem
/*
- what is temp amplitude -> difference between hightest and lowest temp
- how to compute max and min?
- what is a sensor error? And what to do? -> ignore
*/
// 2. Breaking up into sub-problem
/*
- how to ignore errors?
- Find max value in temp array
- Find min value in temp array
- subtract min from max (amplitude) and return it
*/
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// TODO: Problem 2:
/*
  Function should now receive 2 arrays of temps
*/

// 1. Understanding the problem
/*
- with 2 arrays, should we implement functionality twice? -> NO just merge two arrays
*/
// 2. Breaking up into sub-problem
/*
- how to merge two arrays? -> google or stackoverflow (MDN)
*/
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// HIGHLIGHT: DEBUG
// NOTE: Using debugger
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
    // 3. Fix the bug
    // value: Number(prompt('Degree celsius')),
  };
  // 2. Find the BUG
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. Identify the bug
console.log(measureKelvin());

// NOTE: using debugger 2
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // NOTE: debugger; -> = add breakpoint
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // 1. Identify the bug
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
