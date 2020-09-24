import React, { createContext, useState, useEffect } from "react";
import {fetchGet } from '../helper/fetchHelper';
import Apis from "../constants/Apis";
import {Token} from "../constants/Token";
const AirQualityContext = createContext({
    changeSelectedCityUrl: (newSelectedCityUrl) => {},
    airQualityInfo: {},
  });
  export { AirQualityContext };
  export default function AirQualityContextProvider({ children }) {
    const [selectedCityUrl, changeSelectedCityUrl] = useState("");
    const [airQualityInfo, setAirQualityInfo] = useState({});
    useEffect(() => {
      if (selectedCityUrl !== "") {
        fetchGet(Apis.FEED + selectedCityUrl + "/?token=" + Token).then(
          ({ responseJSON, status }) => {
            if (status === 200) {
              setAirQualityInfo(responseJSON.data);
            }
          }
        );
      }
    }, [selectedCityUrl]);
    return (
      <AirQualityContext.Provider
        value={{ changeSelectedCityUrl, airQualityInfo }}
      >
        {children}
      </AirQualityContext.Provider>
    );
  }
  