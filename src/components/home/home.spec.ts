import { describe, it } from "mocha";
import { expect } from "chai";
import HomeService from "./home.service";

describe("home.service tests", () => {
  it("should to be string and must have hello world", () => {
    const homeService = new HomeService();

    const result = homeService.sayHello();
    expect(result).to.be.a("string").to.have.contain("Hello world");
  });
});
