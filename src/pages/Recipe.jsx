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

export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  const Recipes = recipes.find((item) => item.Id == id);
  console.log(Recipes);
  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          element="img"
          image
          src={Recipes.Image}
          title={Recipes.Title}
        />
        <CardContent>
          <Typography
            gutterBottom
            varient="h4"
            component="h4"
            style={{ textAlign: "center" }}
          >
            {Recipes.Image}
            <p> {Recipes.Title} </p>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
