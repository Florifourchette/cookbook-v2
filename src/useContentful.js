import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFULT_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    host: "preview.contentful.com",
  });
  const getRecipes = async (categoryID, searchInput) => {
    try {
      const entries = await client.getEntries({
        content_type: "recipeTitle",
        select: "fields",
        "fields.categories.sys.id": categoryID?.sys.id,
        query: searchInput,
        "fields.recipeTitle[match]": searchInput,
        
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

  const getCategories = async () => {
    try {
      const categories = await client.getEntries({
        content_type: "categories",
        select: "fields",
      });
      return categories.items;
    } catch (error) {
      console.log(`Error fetching recipes: ${error}`);
    }
  };
  return { getRecipes, getCategories };
};
export default useContentful;
