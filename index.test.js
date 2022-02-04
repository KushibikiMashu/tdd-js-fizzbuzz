const fizzBuzz = require('./index');

describe('数値を文字列に変換する', () => {
  test("1を渡すと文字列'1'を返す", () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  test("2を渡すと文字列'2'を返す", () => {
    expect(fizzBuzz(2)).toBe('2');
  });
});

describe('3の倍数を渡すと「Fizz」を返す', () => {
  test('3を渡すと文字列「Fizz」を返す', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

describe('5の倍数を渡すと「Buzz」を返す', () => {
  test('5を渡すと文字列「Buzz」を返す', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe('3と5両方の倍数を渡すと「FizzBuzz」を返す', () => {
  test('3と5両方の倍数を渡すと文字列「FizzBuzz」を返す', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});
