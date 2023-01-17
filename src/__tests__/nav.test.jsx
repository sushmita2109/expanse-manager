import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Nav } from "../components/nav";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Nav component testing", () => {
  it("should render navigation component", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toBeDefined();
  });

  it(" should render a link to home", () => {
    //arrange
    const wrapper = shallow(<Nav />);

    //action

    //assert
    expect(wrapper.find(".brand").prop("to")).toEqual("/");
    // link should navigate to /
  });
  it(" should render a link to signup", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(".secLink").prop("to")).toEqual("/login");
  });
  it(" should render a link to login", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(".priLink").prop("to")).toEqual("/signup");
  });
});
