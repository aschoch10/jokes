const Joke = require("../models/joke");

module.exports = {
  findAllJokes: (req, res) => {
    Joke.find()
        .then(allJokes =>{ 
          console.log(allJokes);
          res.json({jokes: allJokes})
        })
        .catch(err => res.json ({message: "error res", error: err}))
  },

  createNewJoke: (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json(newJoke) )
    .catch(err => res.json ({message: "error res", error: err}))
  },

  findOneJoke: (req, res) => {
    Joke.findById(req.params.id)
    .then(joke => res.json(joke))
    .catch(err => res.json ({message: "error res", error: err}))
  },

  updateJoke: (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body,{
      new: true, runValidators: true
    })
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json ({message: "error res", error: err}))
  },

  deleteJoke: (req,res) => {
    Joke.findByIdAndDelete(req.params.id)
    .then(result  => res.json(result))
    .catch(err => res.json ({message: "error res", error: err}))
  }
}




// //From different assignment for reference 
// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewUser = (req, res) => {
//   User.create(req.body)
//     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
