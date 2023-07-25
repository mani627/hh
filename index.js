const express = require('express');
const app = express();
const PORT = 3000;
const Create_User = require("./Model/User_Details")
const dotenv = require('dotenv');


// Parsing request body
app.use(express.json());


//database constant config .env
dotenv.config({
    path: "./.env"
})



// Creating User
app.post("/Create_User", async (req, res, next) => {

    try {
        const result = await Create_User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Emp_Id: req.body.Emp_Id,
            Email: req.body.Email,
            Password: req.body.Password,
            Profile_Img: req.body.Profile_Img,
            Role: req.body.Role,
            CreatedOn: req.body.CreatedOn,
            IsActive: req.body.IsActive

        })
        res.send(result)
    } catch (er) {
        next(er);
    }


})


// Creating User
app.get("/Welcome", async (req, res, next) => {

   
    res.send("Hy mani")

})




// Error handler
app.use((err, req, res, next) => {


    if (req.timedout) {
        // Handle the timeout error
        res.status(408).send('Request timeout');
    } else {
        res.status(err.status || 500);
        res.send({
            error: {
                success: false,
                status: err.status || 500,
                message: err.message
            }
        })
    }

})



app.listen(
    process.env.PORT||PORT, (error) => {
    if (error) {
        console.log("error occured");
    }
}
)
