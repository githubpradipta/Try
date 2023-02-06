const express= require("express");
const app=express();
app.listen(3000);
app.use(express.json());

const authRouter=express.Router();
app.use('/auth',authRouter);

authRouter
    .route('/signup')
    .get(getSignup)
    .post(postSignup)

function getSignup(req,res){
    res.sendFile("./public/index.html",{root:__dirname});
}
function postSignup(req,res){
    console.log(req.body);
    res.send("Thank you")
}