import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
const SERVER_PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.json({ response: "Server is running" });
});

app.use("/gql", graphqlHTTP({
  graphiql: true,
  schema: schema
}));
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("short"));

app.listen(SERVER_PORT, () => {
  console.log("Listening on port " + SERVER_PORT);
});
