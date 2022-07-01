import HistoryModel from "../models/historyModel.js";
import jtw from "jsonwebtoken";
import signupModel from "../models/userSignupModel.js";

export const postHistory = async (req, res) => {
    

    // try {
    //     if (req.user) {
    //       const user = await signupModel.find();
    //       res.status(200).json({ details: user });
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // ;



    const { amount, description,user_id } = req.body;
    try {
        const user = await signupModel.findById(user_id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const history = new HistoryModel({
            amount,
            description,
        });
    
   
     
        await history.save();
        user.wallet.push(history._id);
        await user.save();
        res.status(200).json({ msg: "History Added!" });
    } catch (error) {
        res.status(500).send(error);
    }
    
}
    export const getUser = async (req, res) => {
        try {
            console.log(req);
            const user = await signupModel.findById(req.body.user_id).populate("wallet");
            res.status(200).json({user});
            // const history = await HistoryModel.find();
            // res.status(200).json(history);
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
