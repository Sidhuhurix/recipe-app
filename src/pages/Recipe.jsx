import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  Card: {
    padding: theme.spacing(4),
  },
  CardMedia: {
    // padding: "1em 2em",
    height: "350px",
    borderRadius: "100px",
  },
}));
export default function Recipe() {
  const className = useStyles();
  const { id } = useParams();
  console.log(id);
  const Recipes = recipes.find((item) => item.Id == id);
  console.log(Recipes);
  return (
    <Container maxWidth="md" className={className.root}>
      <Card className={className.Card}>
        <CardMedia
          component="img"
          image={Recipes.Image}
          title={Recipes.Title}
          // ingredients={Recipes.Ingredients}
          className={className.CardMedia}
        />
        <CardContent>
          <Typography
            gutterBottom
            varient="h4"
            component="h4"
            style={{ textAlign: "center" }}
          >
            <p> {Recipes.Title} </p>
          </Typography>
          <Typography variant="h6" component="h6">
            Ingredients:
          </Typography>

          <Typography variant="body2" color="textSecondary" component="ol">
            {Recipes.Ingredients.map((Ingredients, index) => (
              <li key={index}>{Ingredients}</li>
            ))}
          </Typography>
          <Typography variant="h6" component="h6">
            Instructions:
          </Typography>

          <Typography variant="body2" color="textSecondary" component="ol">
            {Recipes.Instructions.map((Instructions, index) => (
              <li key={index}>{Instructions}</li>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
