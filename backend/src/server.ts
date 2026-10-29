import "dotenv/config";
import { createApp } from "./app";
import { checkDatabase } from "./db";

const port = Number(process.env.PORT) || 3000;
const app = createApp({ checkDatabase });

app.listen(port, () => {
  console.log(`FootballCoach API listening on port ${port}`);
});
