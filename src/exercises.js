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

  function max(numbers) {

    if (!numbers || numbers.length % 2 === 0 || numbers.length < 3 || !isNumeric(numbers)) {

      return undefined;

    } else {
      let newNumberArray = [];
      let firstNumber = numbers[0];
      let middleNumber = numbers[Math.floor(numbers.length / 2)];
      let lastNumber = numbers[numbers.length - 1];

      newNumberArray.push(firstNumber, middleNumber, lastNumber);

      let maximum = Number(Math.max.apply(null, newNumberArray));

      return maximum;

    }

  }


function middle(values) {
  if (!values || values.length < 3 || values.length % 2 === 0) {
    return [];
  } else {
    let newArray = [];
    let middle = Math.floor(values.length / 2);

    newArray.push(values[middle - 1], values[middle], values[middle + 1]);

    return newArray;
  }
}
function increasing(numbers) {
  if (!numbers|| numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 3) {
     return false;
   } else {
	for (let i = 1; i < numbers.length; i++) {

		if ((numbers[i - 1] + 1) === numbers[i]) {
			i++
			if ((numbers[i - 1] + 1) === numbers[i]) {
				return true;
				break;
			}
		}
	}
}
return false;
}
function everywhere(values, x) {
  let result = false;
  if (!values || values.length < 1 || !x) {
   return false;
   }

   for (let i = 0; i < values.length; i++) {
       if (values[i] !== x) {
           if (values[i - 1] === x || values[i + 1] === x) {
             result = false;
           } else {
               return false;
           }
       }
   }
   return true;
}

function consecutive(numbers) {

  if (!numbers || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 3) {
    return false;
  }
  let result = false;

for (let i = 0; i < numbers.length - 2;i++) {
  if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0) {
    result = true;
  } else if (numbers[i] % 2 === 1 && numbers[i + 1] % 2 === 1 && numbers[i + 2] % 2 === 1) {
    result = true;
  }

}
return result;

}
function balance(numbers) {

let halfSum;
let sumB = 0;
let result;
let sumA = 0;



if (!numbers || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 2) {
  return false;
}
  for (let i = 0; i < numbers.length; i++){
        sumA = sumA + numbers[i];
      }
    sumHalf = sumA / 2;
    if(sumA % 2 === 1) {
        result = false;
        return result;
    }
    for (let x = 0; x < numbers.length - 1; x++) {

        sumB = sumB + numbers[x];

        if (sumB === sumHalf) {
          result = true;
          return result;
        }
    }

    if (result === true) {
        return true;
    } else {
        return false;
    }
  console.log("test");
}




function clumps(values) {
  // write your code here
}



  function isNumeric(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") {
         return false;
      }
    }
    return true;
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
