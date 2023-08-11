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
import { Title } from "@material-ui/icons";

export default function Recipe() {
  const { Id } = useParams();
  const Recipes = recipes.find((item) => item.Id == Id, Recipe.Title == Title);
  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          image={recipes.Image}
          title={recipes.Title}
        />
        <CardContent>
          <Typography
            gutterBottom
            varient="h5"
            component="h5"
            style={{ textAlign: "center" }}
          >
            {recipes.Title}
            {recipes.Image}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
