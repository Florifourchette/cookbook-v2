import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import Typography from "@mui/material/Typography";
import { CssBaseline, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { borderRadius } from "@mui/system";

export default ({ filteredRecipes }) => {
  const [thisRecipe, setThisRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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
      <nav
        aria-label="breadcrumb"
        style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {id}
          </li>
        </ol>
      </nav>
      <main>
        <div>
          <Container
            id="recipePageImageBox"
            align="center"
            sx={{ mb: 3 }}
            maxWidth="sm"
            style={{
              backgroundImage: `url(${
                "https:" +
                thisRecipe.recipeImg?.file.url +
                "?fit=thumb&f=top_left"
              })`,
              backgroundSize: "cover",
              height: "70vh",
              width: "70vh",
              color: "#f5f5f5",
              borderRadius: "35%",
            }}
          ></Container>
          <Container maxWidth="sm" align="center">
            <Typography
              gutterBottom
              variant="h1"
              component="div"
              color="textPrimary"
              align="center"
            >
              <h1>{thisRecipe.recipeTitle}</h1>
            </Typography>
          </Container>
          <Container maxWidth="sm" align="center">
            <Typography
              gutterBottom
              variant="paragraph"
              component="div"
              color="textSecondary"
              align="center"
              sx={{ mb: 4 }}
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
    </div>
  );
};
