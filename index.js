function canDivideBy(numerator, denominator) {
  return numerator % denominator === 0;
}

function fizzBuzz(num) {
  const typename = typeof num;
  if (typename !== 'number') {
    throw new Error(`Invalid type argument: ${typename}`);
  }

  const canDivideByThree = num % 3 === 0;
  const canDivideByFive = num % 5 === 0;

  if (canDivideByThree && canDivideByFive) {
    return 'FizzBuzz';
  } else if (canDivideByThree) {
    return 'Fizz';
  } else if (canDivideByFive) {
    return 'Buzz';
  }
  return num.toString();
}

module.exports = { canDivideBy, fizzBuzz };
