import { describe, it } from "mocha";
import { expect } from "chai";
import HomeService from "./home.service";
import request from "supertest";
import app from "../../app";
import { container } from "tsyringe";

describe("service tests", () => {
  it("should to be string and must have hello world", () => {
    const homeService = container.resolve(HomeService);

    const result = homeService.sayHello();
    expect(result).to.be.a("string").to.have.contain("Hello world");
  });
});

describe("test API'S", () => {
  it("test GET /", () => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "13")
      .end((err) => {
        if (err) throw new Error(err);
      });
  });
});
