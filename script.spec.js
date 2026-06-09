const calculator = require('./script.js');

describe('add', ()=>{
    test('adds 0 and 0', () =>{
        expect(calculator.add(0,0)).toBe(0);
    });

    test('adds 2 and 2', () => {
        expect(calculator.add(2, 2)).toBe(4);
  });

    test('adds positive numbers', () => {
        expect(calculator.add(2, 6)).toBe(8);
  });

      test('adds negative numbers', () => {
        expect(calculator.add(-2, -6)).toBe(-8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('subtracts negative numbers', () => {
    expect(calculator.subtract(-10, -4)).toBe(-6);
  });

  test('subtracts numbers of mixed parity', () => {
    expect(calculator.subtract(-8, 7)).toBe(-15);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('multiplies by zero', () => {
    expect(calculator.multiply(2,0)).toBe(0);
  });

    test('multiplies by negative', () => {
    expect(calculator.multiply(2,-9)).toBe(-18);
  });
});

describe('divide', () => {
  test('divide two numbers', () => {
    expect(calculator.divide(2, 4)).toBe(0.5);
  });

  test('divide by zero', () => {
    expect(calculator.divide(2,0)).toBe(Infinity);
  });

    test('divide by negative', () => {
    expect(calculator.divide(10,-2)).toBe(-5);
  });
});

describe('operate', () => {
  test('operate an addition', () => {
    expect(calculator.operate(2, "+", 4)).toBe(6);
  });

  test('operate a subtraction', () => {
    expect(calculator.operate(2, "-", 4)).toBe(-2);
  });

  test('operate a multiplication', () => {
    expect(calculator.operate(2, "*", 4)).toBe(8);
  });

  test('operate a division', () => {
    expect(calculator.operate(2, "/", 4)).toBe(0.5);
  });
});

