import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./SearchBox.styles";
import { AirQualityContext } from "../../contexts/AirQualityContext";

export default function AirQualityInfo() {
  const classes = useStyles();
  let { airQualityInfo } = useContext(AirQualityContext);
  return (
    <Grid item md={8} xs={12} className={classes.airQualityGrid}>
      <Grid container direction='row' wrap='wrap'>
        <Grid item md={12} className={classes.aqiGrid}>
          <Typography variant='h1' align='center' color='primary'>
            {airQualityInfo && airQualityInfo.aqi ? airQualityInfo.aqi : "--"}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h5' align='center'>
            name:
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant='h5' align='left' color='primary'>
            {airQualityInfo && airQualityInfo.city
              ? airQualityInfo.city.name
              : "--"}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h5' align='center'>
            Geo:
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant='h5' align='left' color='primary'>
            {airQualityInfo && airQualityInfo.city
              ? "( " +
                airQualityInfo.city.geo[0] +
                " , " +
                airQualityInfo.city.geo[1] +
                " )"
              : "--"}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h5' align='center'>
            time:
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant='h5' align='left' color='primary'>
            {airQualityInfo && airQualityInfo.time
              ? airQualityInfo.time.s
              : "--"}
          </Typography>
        </Grid>
        {airQualityInfo && airQualityInfo.city ? (
          <Grid
            item
            md={12}
            container
            justify='center'
            alignItems='center'
            className={classes.linkGrid}
          >
            <Typography
              component='a'
              href={airQualityInfo.city ? airQualityInfo.city.url : "#"}
              variant='h5'
              align='center'
            >
              Webpage associated to the the monitoring station
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}
