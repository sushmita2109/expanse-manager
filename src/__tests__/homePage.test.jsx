import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { HomePage } from "../components/homePage";

Enzyme.configure({ adapter: new Adapter() });

describe("homePage unit testing", () => {
  it("should render homepage ", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toBeDefined();
  });
  it("should render to apple strore", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(".applelink").prop("href")).toEqual(
      "https://apps.apple.com/us/app/splitwise/id458023433"
    );
  });
  it("should render to android strore", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(".androidlink").prop("href")).toEqual(
      "https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile&pli=1"
    );
  });
});
