const { expect } = require('chai');
const Calculator = require ('../calculator.js');
const calc = new Calculator();

describe ('Test calc - Addition', function () {
    it('Should be mathematical actions with calc - Addition integers', async () => {
      expect(calc.add(12, 1)).to.equal(13);
    });

    it('Should be mathematical actions with calc - Addition decimal number', async () => {
      expect(calc.add(12.9, 1)).to.equal(13.9);
    });

    it('Should be mathematical actions with calc - Addition negativ number', async () => {
      expect(calc.add(-12, 1)).to.equal(-11);
    });

    it('Should be mathematical actions with calc - Addition array', async () => {
      expect(calc.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).to.equal(45);
    });
    
  });  

  describe ('Test calc - Multiply', function () {
     it ('Should be mathematical actions with calc - Multiply integers', async () => {
         let multiplyResult = calc.multiply (12,1);
         expect (multiplyResult).to.equal(12);
     });

     it('Should be mathematical actions with calc - Multiply decimal number', async () => {
      expect(calc.multiply(12.9, 1)).to.equal(12.9);
    });

    it('Should be mathematical actions with calc - Multiply negativ number', async () => {
      expect(calc.multiply(-12, 1)).to.equal(-12);
    });

    it('Should be mathematical actions with calc - Multiply array', async () => {
      expect(calc.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9)).to.equal(362880);
    });
  });

    describe ('Test calc - Subtracting', function () {
       it ('Should be mathematical actions with calc - Subtracting integers', async () => {
           let subtractionResult = calc.subtraction (12,1);
           expect (subtractionResult).to.equal(11);
       });
  
       it('Should be mathematical actions with calc - Subtracting decimal number', async () => {
        expect(calc.subtraction(12.9, 1)).to.equal(11.9);
      });
  
      it('Should be mathematical actions with calc - Subtracting negativ number', async () => {
        expect(calc.subtraction(-12, 1)).to.equal(-13);
      });
  
      it('Should be mathematical actions with calc - Subtracting array', async () => {
        expect(calc.subtraction(-1, 2, -3, 4, -5, 6, -7, 8, -9)).to.equal(-3);
      }); 
  });  
  
  describe ('Test calc - Divide', function () {
     it ('Should be mathematical actions with calc - Divide integers', async () => {
         let divideResult = calc.divide (12,1);
         expect (divideResult).to.equal(12);
     });

     it('Should be mathematical actions with calc - Divide decimal number', async () => {
      expect(calc.divide(15, 2.5)).to.equal(6);
    });

    it('Should be mathematical actions with calc - Divide negativ number', async () => {
      expect(calc.divide(-12, 10)).to.equal(-1.2);
    });

    it('Should be mathematical actions with calc - Divide array', async () => {
      expect(calc.divide(-1, 2, -3, 4, -5, 6, -7, 8, -9)).to.equal(-0.5);
    }); 
});  