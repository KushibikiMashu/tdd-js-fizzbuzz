function canDivideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Invalid argument: denominator is 0.');
  }

  return numerator % denominator === 0;
}

function fizzBuzz(num) {
  const typename = typeof num;
  if (typename !== 'number') {
    throw new Error(`Invalid type argument: ${typename}`);
  }

  const canDivideByThree = canDivideBy(num, 3);
  const canDivideByFive = canDivideBy(num, 5);

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
