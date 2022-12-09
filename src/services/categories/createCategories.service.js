import { database } from "../../database/index.js";

export const createNewCategoryService = async (categoryName) => {
  
  const [response] = await database.query(
    `
    INSERT INTO categories (name)
    VALUES ($1)
    RETURNING *
    `,
    [categoryName]
  ).then((res) => res.rows)

  return [201, response];
};
