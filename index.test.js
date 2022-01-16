const { canDivideBy, fizzBuzz } = require('./index');

describe('倍数を判定する', () => {
  test('分子に6、分母に3を渡すと true を返す', () => {
    expect(canDivideBy(6, 3)).toBeTruthy();
  });

  test('分子に5、分母に2を渡すと false を返す', () => {
    expect(canDivideBy(5, 2)).toBeFalsy();
  });
});

describe('数を文字列に変換する', () => {
  test("1を渡すと文字列'1'を返す", () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  test("2を渡すと文字列'2'を返す", () => {
    expect(fizzBuzz(2)).toBe('2');
  });
});

describe('3の倍数を渡すと「Fizz」を返す', () => {
  test("3を渡すと文字列'Fizz'を返す", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

describe('5の倍数を渡すと「Buzz」を返す', () => {
  test("5を渡すと文字列'Buzz'を返す", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe('15の倍数を渡すと「FizzBuzz」を返す', () => {
  test('15を渡すと文字列「FizzBuzz」を返す', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});

describe('数値以外の値を渡したとき、例外を発生させる', () => {
  // const getErrorMessage = ()

  test('文字列argを渡すとエラーを発生させる', () => {
    expect(() => fizzBuzz('arg')).toThrow('Invalid type argument: string');
  });

  test('undefined を渡すとエラーを発生させる', () => {
    expect(() => fizzBuzz(undefined)).toThrow(
      'Invalid type argument: undefined'
    );
  });
});
