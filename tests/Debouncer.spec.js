const chai = require("chai");
const expect = chai.expect;
chai.should();

const debounce = require("../index");

describe("debounce", function () {
  it("Should exist", function () {
    expect(debounce).to.exist;
  });
});
