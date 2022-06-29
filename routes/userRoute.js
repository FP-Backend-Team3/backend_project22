import express from "express";
import {createUser } from "../user-controller/signupController.js"
import {loginUser } from "../user-controller/signinController.js"
import {postHistory, getHistory, deleteHistory,updateHistory, loggedIn } from "../user-controller/historyController.js"
import auth from "../middle/auth.js";



const router = express.Router();

router.post("/signup",createUser)

router.post("/login",loginUser)

// router.get("/loggedin", authorize, loggedIn)

router.post("/history", postHistory)

router.get("/history", getHistory)

router.delete("/history/:id",deleteHistory)

router.put("/history/:id",updateHistory)

router.get("/autho", auth, loggedIn);

// router.get("/cache",getCache)
export default router;

