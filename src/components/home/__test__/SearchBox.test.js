import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
// import Apis from "../../constants/Apis";
// import { Token } from "../constants/Token";
import SerachBox from "../SearchBox";
import ThemeProvider from "../../ThemeProvider";
import { act } from "react-dom/test-utils";
import { citiesMockData } from "../../../mockData/cities";
import CityNameItem from "../CityNameItem";

configure({ adapter: new Adapter() });

describe("searchBox", () => {
  it("changes input value on make sure data will be shown after clicking on search icon", async () => {
    const wrapper = mount(
      <ThemeProvider>
        <SerachBox />
      </ThemeProvider>
    );

    const mockSuccessResponse = {
      data: citiesMockData,
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    await act(async () => {
      await wrapper
        .find("input")
        .simulate("change", { target: { value: "melbourne" } });
      await wrapper.find("#SearchIconButton").at(0).simulate("click");
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    wrapper.update();
    expect(wrapper.find(CityNameItem).length).toEqual(8);
  });
});
