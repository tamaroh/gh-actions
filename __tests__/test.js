function add (a,b) {
  return a+b;
}

test("it can add" , () => {
  expect(add(1,3)).toBe(4);
})
