// check the API

import express from "express";
import {
  create,
  deleteUser,
  getAll,
  getOne,
  update,
} from "../controller/userController.js";

const route = express.Router();
// post use data insert
route.post("/create", create);

// fetch the data
route.get("/getall", getAll);

// perticular data found
route.get("/getone/:id", getOne);

// update the data through the id
route.put("/update/:id", update);

// delete the data
route.delete("/delete/:id", deleteUser);

export default route;
