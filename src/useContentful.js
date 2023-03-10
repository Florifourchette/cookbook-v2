import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "8sp5hqkneneh",
    accessToken: "3ne6cvWMB5xiFG6QbzVqd7IzgNbqvAObxg3Co6pP7XE",
    host: "preview.contentful.com",
  });
  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipeTitle",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        const recipeImg = item.fields.recipePicture?.fields;
        return {
          ...item.fields,
          recipeImg,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching recipes: ${error}`);
    }
  };
  return { getRecipes };
};
export default useContentful;
