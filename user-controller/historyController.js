import HistoryModel from "../models/historyModel.js";
import jtw from "jsonwebtoken";
import signupModel from "../models/userSignupModel.js";


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
    export const postHistory = async (req, res) => {
    
    
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

    // history collection 
    // history = { _id:12131313133, expenses:3000, description:"sjdjsjdkjs"}
 // user collection 
 // user= { _id:12131313133, name:"sjdjsjdkjs", wallet:[12131313133,12131313133]}
    export const deleteHistory = async (req, res) => {
        const { id } = req.params;
        try {
            await HistoryModel.findByIdAndDelete(id);
            const user = await signupModel.findById(req.body.user_id);
            const updatedWallet = user.wallet.filter(item => item != id);
            user.wallet = updatedWallet;
            await user.save();
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
