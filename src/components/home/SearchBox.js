import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./SearchBox.styles";
import CityNameItem from "./CityNameItem";
import Apis from "../../constants/Apis";
import { Token } from "../../constants/Token";
import { fetchGet } from "../../helper/fetchHelper";

export default function SerachBox() {
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getCities = () => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    setCities([]);
    fetchGet(Apis.SEARCH + "?keyword=" + cityName + "&token=" + Token).then(
      ({ responseJSON, status }) => {
        if (status === 200) {
          setSuccess(true);
          setLoading(false);
          setCities(responseJSON.data);
        } else {
          setError(true);
          setLoading(false);
        }
      }
    );
  };

  const onChngecityInput = (e) => {
    setCityName(e.target.value);
  };

  const SearchClick = () => {
    getCities();
  };

  return (
    <Grid item md={4} xs={12} className={classes.rootGrid}>
      <Grid container direction='column'>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.searchGrid}
        >
          <input
            value={cityName}
            onChange={onChngecityInput}
            autoFocus
            type='text'
            placeholder='Example: Melbourne'
            className={classes.searchCityInput}
            onKeyDown={(event) => {
              if ( event.keyCode === 13) {
                getCities();
              }
            }}
          />
          <IconButton onClick={SearchClick}>
            <SearchIcon id='SearchIconButton' />
          </IconButton>
        </Grid>
        {loading ? (
          <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.loadingGrid}
          >
            <CircularProgress />
          </Grid>
        ) : error ? (
          <Typography
            variant='body2'
            className={classes.descText}
            color='error'
          >
            Error! Check internet connection
          </Typography>
        ) : success && cities.length === 0 ? (
          <Typography variant='body2' className={classes.descText}>
            City Not Found
          </Typography>
        ) : cities.length === 0 ? (
          <Typography variant='body2' className={classes.descText}>
            Search for a city
          </Typography>
        ) : null}
        {cities.map((city) => {
          return <CityNameItem key={city.uid} city={city} />;
        })}
      </Grid>
    </Grid>
  );
}
