import HistoryModel from "../models/historyModel.js";
import jtw from "jsonwebtoken";
import signupModel from "../models/userSignupModel.js";

export const postHistory = async (req, res) => {
    const { authorization  } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    



    const { amount, description } = req.body;
    const history = new HistoryModel({
        amount,
        description,
    });
    try {
        await history.save();
        res.status(200).json({ msg: "History Added!" });
    } catch (error) {
        res.status(500).send(error);
    }
    }

    export const getHistory = async (req, res) => {
        try {
            const history = await HistoryModel.find();
            res.status(200).json(history);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export const deleteHistory = async (req, res) => {
        const { id } = req.params;
        try {
            await HistoryModel.findByIdAndDelete(id);
            res.status(200).json({ msg: "History Deleted!" });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    export const updateHistory = async (req, res) => {
        const { id } = req.params;
        const { amount, description } = req.body;
        try {
            await HistoryModel.findByIdAndUpdate(id, {
                amount,
                description,
            });
            res.status(200).json({ msg: "History Updated!" });
        } catch (error) {
            res.status(500).send(error);
        }
    }
  
    
    export const loggedIn = async (req, res) => {
     
        try {
          const user = await signupModel.findById(req.user.id).select("-password");
          res.status(200).json(user);
          console.log(signupModel)
        } 
       
        catch (error) {
          res.json(error.message);
        }
      
      };
