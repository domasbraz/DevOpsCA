const assert = require("assert");
const calc = require("../public/js/calc");

describe("Calculator functions", function(){

  it("adds numbers correctly", function(){
    assert.strictEqual(calc.add(2,3),5);
  });

  it("subtracts numbers correctly", function(){
    assert.strictEqual(calc.sub(5,2),3);
  });

  it("multiplies numbers correctly", function(){
    assert.strictEqual(calc.multi(5,2),10);
  });

  it("divides numbers correctly", function(){
    assert.strictEqual(calc.divide(5,10),0.5);
  });

});