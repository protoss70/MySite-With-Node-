data1 = {
  Title: "Chess Tournament",
  Requirements: ["Owner", "Faculty", "Status"],
  reqText: ["Mathew Barner", "Fel", "Looking For People"],
  ItemDescription: "This is a friendly semi-professional Tournament,winner will be awarded with 1000 czk. Hope everyone has lots of fun!",
  Img: "/img/ChessTournament.jpg",
  type: "Event"
};

data2 = {
  Title: "Python AI For Automation",
  Requirements: ["Owner", "Faculty", "Language"],
  reqText: ["Sam Vodnik", "Fil", "Python"],
  ItemDescription: "We are developing AI for car headlight automation. Team of 3 looking for SQL developer, and data miner.",
  Img: "/img/CodingProject.jpg",
  type: "Project"
};

data3 = {
  Title: "F1 Club",
  Requirements: ["Owner", "Faculty"],
  reqText: ["Cvut Fel", "Fel"],
  ItemDescription: "We are the F1 team of CVUT FEL. We make great f1 cars and join international races! We need all sorts of people to work with us. Come and change your University life!",
  Img: "/img/f1Club.jpg",
  type: "Club"
};

// Upper part will preferably come from a SQL database!

var datas = [data1, data2, data3];

const express = require("express");

const body = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(body.urlencoded({
  extended: true
}));

app.use(express.static("static"));


app.get("/", function(req, res) {
  res.render("index", {datas: datas});
})

app.listen(6900);
