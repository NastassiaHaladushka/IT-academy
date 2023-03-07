const { expect } = require('chai');
const Calculator = require ('../calculator.js');

describe ('Unit test', async function () {

    it('Should be mathematical actions with calc', async () => {
      const calc = new Calculator();
      expect(calc.add(12, 1)).to.equal(13);
    });
  });  