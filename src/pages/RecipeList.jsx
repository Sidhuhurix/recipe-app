import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { recipes } from "../data";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  cardList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    margin: "2em",
    justifyContent: "center",
  },
  Card: {
    margin: "1em",
    cursor: "pointer",
  },
  cardMedia: {
    borderRadius: "20px",
    margin: "1em 2em",
    height: "350px",
    width: "300px",
    cursor: "pointer",
  },
  cardTitle: {
    textAlign: "center",
  },
});
export default function RecipeList() {
  const className = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Typography varient="h5" align="center" gutterBottom>
        Recipes
      </Typography>
      <div className={className.cardList}>
        {recipes.map((recipes) => (
          <Card
            key={recipes.Id}
            onclick={() => navigate(`/recipe/${recipes.Id}`)}
            className={className.Card}
          >
            <CardMedia
              image={recipes.Image}
              title={recipes.Title}
              className={className.cardMedia}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h5"
                className={className.cardTitle}
              >
                {recipes.Title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
