import { app } from "./app.js";
import "dotenv/config";
import { startDatabase } from "./database/index.js";

export default app.listen(3000, async () => {
  await startDatabase();
  console.log("Server running");
});
