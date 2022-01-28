const Joke = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes", Joke.findAllJokes);
  app.post("/api/jokes/new", Joke.createNewJoke);
  app.get("/api/jokes/:id", Joke.findOneJoke);
  app.put("/api/jokes/update/:id", Joke.updateJoke);
  app.delete("/api/jokes/delete/:id", Joke.deleteJoke);
};