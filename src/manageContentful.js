import { createClient } from "contentful-management";

const manageContentful = () => {
  const client = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT,
  });

  const createEntry = async (entry, setUploading) => {
    try {
      client
        .getSpace(process.env.REACT_APP_CONTENTFULT_SPACE)
        .then((space) => {
          // console.log(space.getEnvironment("master").then(data => console.log(data)));
          return space.getEnvironment("master");
        })
        .then((environment) => {
          console.log(environment);

          return environment.createEntry("recipeTitle", entry);
        })
        .then((entry) => {
          console.log(entry);
          setUploading((prev) => !prev);
        })
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  };

  return { createEntry };
};

export default manageContentful;
