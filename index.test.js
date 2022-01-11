const add = require('./index')

test('1と2を渡したとき、3を返す', ()=> {
  expect(add(1, 2)).toBe(3);
});
