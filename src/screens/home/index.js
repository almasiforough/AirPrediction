import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './index.styles'
import Header from '../../components/Header'
import SerachBox from '../../components/home/SearchBox'
import AirQualityContextProvider from '../../context/AirQualityContext'
import AirQualityInfo from '../../components/home/AirQualityInfo'

export default function Index() {
  const classes = useStyles()
  return (
    <AirQualityContextProvider>
      <Grid container>
        <Header title="Air Quality Index" />
        <Grid container direction="row" className={classes.rootGrid}>
          <SerachBox />
          <AirQualityInfo />
        </Grid>
      </Grid>
    </AirQualityContextProvider>
  )
}