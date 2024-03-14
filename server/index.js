const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, submitGoal, deleteGoal, motivateUser } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", submitGoal);
app.delete("/api/goal", deleteGoal);
app.put("/api/motivate", motivateUser); 

app.listen(4000, () => console.log("Server running on 4000"));