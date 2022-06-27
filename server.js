import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
