const { expect } = require("chai");

describe("ERC20Mock", function() {
  it("returns UNI's symbol", async function() {
    const ERC20Mock = await ethers.getContractFactory("ERC20Mock");
    const greeter = await ERC20Mock.attach("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984");

    expect(await greeter.symbol()).to.equal("UNI");
  });
});
