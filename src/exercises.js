function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a.length < 1 || b.length < 1) {
    return false;
  }

   if (a[0] === b[0] || (a.pop() === b.pop())) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {

  if (!values) {
    return [];
  } else if (values.length < n) {
    return [];
  } else if (!Number.isInteger(n)) {
    return [];
  } else if (n < 0) {
    return [];
  } else {
    let combined = values.slice(0, n);
    let combined2 = values.slice(values.length - n, values.length);

    return combined.concat(combined2);
  }
}

function difference(numbers) {
  var min = Number(Math.min.apply(null, numbers));
  var max = Number(Math.max.apply(null, numbers));

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    let difference = max - min;
    return difference;
  }
  }

  // write your code here


function max(number) {
  if (!number || number.length < 3 || number.some(isNaN) || number.length % 2 === 0) {
    return undefined;
} else {
  let newArray = [];

          newArray.push(number[0]);

          let half = Math.floor(number.length/2);

          newArray.push(number[half]);

          let end = number[number.length - 1];

          newArray.push(end);

          let max = Number(Math.max.apply(null, newArray));



          return max;
}
}
function middle(values) {
  if (!values || values.length === 0) {
    return undefined;
} else if (values.length < 3 && values.length % 2 !== 1) {
  return undefined;
}
}
function increasing(numbers) {
  if (!numbers || numbers.length === 0) {
    return false;
} else if (numbers.length < 3) {
  return false;
} else if (isNaN(numbers)) {
  return false;
} else if (numbers % 1 !== 0) {
  return false;
}
}
function everywhere(values, x) {

}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}



/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
