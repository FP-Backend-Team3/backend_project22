import express from "express"
import { createUser } from "../controllers/signupController.js"
import { loginUser } from "../controllers/signinController.js"
import {
  postHistory,
  getHistory,
  deleteHistory,
  updateHistory,
  loggedIn,
} from "../controllers/historyController.js"
import auth from "../middleware/auth.js"
import { body } from "express-validator"

const router = express.Router()

router.post(
  "/signup",
  [
    body("name").notEmpty().withMessage("First name is required").trim(),
    body("email", "Email is required").isEmail().normalizeEmail(),
    body("password", "Password is required and length min 4 chars.")
      .isLength({ min: 4 })
      .custom((val, { req }) => {
        if (val !== req.body.confirm_password) {
          throw new Error("Password don't match!")
        } else {
          return val
        }
      }),
  ],
  createUser
)

router.post("/login", loginUser)

// router.get("/loggedin", authorize, loggedIn)

router.post("/history", postHistory)

router.get("/history", getHistory)

router.delete("/history/:id", deleteHistory)

router.put("/history/:id", updateHistory)

router.get("/autho", auth, loggedIn)

// router.get("/cache",getCache)
export default router
