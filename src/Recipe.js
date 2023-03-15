import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import Typography from "@mui/material/Typography";
import { CssBaseline, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default ({ filteredRecipes }) => {
  const [thisRecipe, setThisRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const myRecipe = filteredRecipes.find((aRecipe) => {
    return aRecipe.recipeUrl === id;
  });

  useEffect(() => {
    setThisRecipe(myRecipe);
  }, [id]);

  console.log(filteredRecipes);
  console.log(myRecipe);
  console.log(thisRecipe);

  return (
    <div>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm" align="center">
            <Grid
              container
              alignContent="flex-start"
              alignItems="flex-start"
              justify="flex-start"
            >
              <Grid item>
                <img
                  src={
                    "https:" +
                    thisRecipe.recipeImg?.file.url +
                    "?fit=thumb&f=top_left&h=400&w=800&r=200"
                  }
                />
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h1"
                  component="div"
                  color="textPrimary"
                  align="center"
                >
                  <h1>{thisRecipe.recipeTitle}</h1>
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="sm" align="center">
            <Typography
              gutterBottom
              variant="paragraph"
              component="div"
              color="textSecondary"
              align="center"
            >
              <p>{thisRecipe.shortDescription}</p>
              <p>{thisRecipe.longDescription}</p>
            </Typography>
          </Container>
          <Container>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Card sx={{ maxWidth: 400 }} className="recipeCards">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="paragraph"
                        component="div"
                        color="textSecondary"
                        align="center"
                      >
                        <h2>Ingredients</h2>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="paragraph"
                        component="div"
                        color="textSecondary"
                        align="justify"
                      >
                        <ul>
                          {thisRecipe.ingredient?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ maxWidth: 700 }} className="recipeCards">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="paragraph"
                        component="div"
                        color="textSecondary"
                        align="center"
                      >
                        <h2>Steps</h2>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="paragraph"
                        component="div"
                        color="textSecondary"
                        align="justify"
                      >
                        <ol>
                          {thisRecipe.steps?.map((step) => (
                            <li>{step}</li>
                          ))}
                        </ol>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>

      <button onClick={handleClick}>back</button>
    </div>
  );
};
