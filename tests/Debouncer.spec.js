const chai = require("chai");
const expect = chai.expect;
chai.should();

const debounce = require("../index");

describe("debounce", function () {
  it("Should exist", function () {
    expect(debounce).to.exist;
  });

  it("Should execute the function only once", function () {
    let i = 0;
    const callbackFunction = () => {
      i++;
    };
    for (let index = 5; index > 0; index--) {
      debounce(() => {
        callbackFunction();
        expect(i).to.equal(1);
      }, 10);
    }
  });
  it("Should execute the function only once when no timeout provided", function () {
    let i = 0;
    const callbackFunction = () => {
      i++;
    };
    for (let index = 5; index > 0; index--) {
      debounce(() => {
        callbackFunction();
        expect(i).to.equal(1);
      });
    }
  });
});
