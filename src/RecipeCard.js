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
      <Card
        sx={{ maxWidth: 300 }}
        onClick={handleClick}
        className="recipeCards"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
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
          <Link
            className="link"
            to={`/recipe/${recipe.recipeUrl}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              size="small"
              sx={{
                color: "white",
                fontSize: "bold",
                backgroundColor: "#fac061",
                "&:hover": {
                  backgroundColor: "#a5cae3",
                },
              }}
            >
              view more
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{ maxWidth: 300 }}
        onClick={handleClick}
        className="recipeCards"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
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
