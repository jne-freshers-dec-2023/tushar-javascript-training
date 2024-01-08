function add(x, y) {
    return x + y;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function calculate() {
    const result1 = add(2, 3);
    const result2 = multiply(result1, 4);
    return result2;
  }
  
  const finalResult = calculate();
  console.log('Final Result:', finalResult);
  