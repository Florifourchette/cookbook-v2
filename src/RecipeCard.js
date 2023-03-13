import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  if (isActive) {
    return (
      <Card sx={{ maxWidth: 345, margin: "0.5rem" }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={"https:" + recipe.recipeImg?.file.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.recipeTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.shortDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.longDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="link" to={`/recipe/${recipe.recipeUrl}`}>
            <Button size="small" color="primary">
              view more
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 345, margin: "0.5rem" }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={"https:" + recipe.recipeImg?.file.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.recipeTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
};

export default RecipeCard;
