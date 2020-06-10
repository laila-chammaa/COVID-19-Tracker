import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //creating an array with all the info, so the data would be dynamic
  const listedCard = [
    {
      title: "Infected",
      stylesname: styles.infected,
      end: confirmed,
      description: "Number of active cases of COVID-19",
    },
    {
      title: "Recovered",
      stylesname: styles.recovered,
      end: recovered,
      description: "Number of recoveries of COVID-19",
    },
    {
      title: "Deaths",
      stylesname: styles.deaths,
      end: deaths,
      description: "Number of deaths caused by COVID-19",
    },
  ];

  //if the data isn't fetched yet
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {listedCard.map((card, i) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, card.stylesname)}
            key={i}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom={true}>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.end.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
