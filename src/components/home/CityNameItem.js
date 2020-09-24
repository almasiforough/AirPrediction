import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./SearchBox.styles";
import { AirQualityContext } from "../../context/AirQualityContext";

export default function CityNameItem({ city }) {
  const classes = useStyles();
  let { changeSelectedCityUrl } = useContext(AirQualityContext);
  return (
    <div
      onClick={() => {
        changeSelectedCityUrl(city.station.url);
      }}
      className={classes.cityNameDiv}
    >
      <Typography variant='body2'>{city.station.name}</Typography>
    </div>
  );
}