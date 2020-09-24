import React from "react";
import AirQualityContextProvider, {
  AirQualityContext,
} from "./AirQualityContext";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import Apis from "../constants/Apis";
import { Token } from "../constants/Token";

configure({ adapter: new Adapter() });

describe("air quility context", () => {
  it("changes selected city and make sure the fetch api called only once", async () => {
    const testCityURL = "melbourne";
    const CitySelectorComponent = () => {
      const { changeSelectedCityUrl } = React.useContext(AirQualityContext);

      return (
        <>
          <button onClick={() => changeSelectedCityUrl(testCityURL)}>
            Change city
          </button>
        </>
      );
    };

    const wrapper = mount(
      <AirQualityContextProvider>
        <CitySelectorComponent />
      </AirQualityContextProvider>
    );

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    wrapper.find("button").simulate("click");

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(
      Apis.FEED + testCityURL + "/?token=" + Token
    );
  });
});
